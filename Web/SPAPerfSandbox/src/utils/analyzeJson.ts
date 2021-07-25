import {ClickEvent, SnapShot} from "../../types";
import fs from "fs-extra";
import {imgDiff} from "./jpgImgDiff";

export async function analyzeJson(jsonPath: string, diffOutDir: string) {
  const perfJson = require(jsonPath);

  let snapshots: SnapShot[] = perfJson.traceEvents.filter((data: any) => {
    if ('snapshot' in data.args) {
      return data;
    }
  });

  console.log('length', snapshots.length);

  // 画像ファイル書き出し
  snapshots.forEach((data, index) => {
    fs.outputFile(
      `${diffOutDir}/${index}.jpeg`,
      data.args.snapshot,
      {encoding: 'base64'},
      err => {
        console.error('outputFile', err);
      },
    );
    console.log(index, data.ts);
  });

  const final = `${diffOutDir}/${snapshots.length - 1}.jpeg`;

  let firstMismatchedIndex = -1;
  // 最後の１枚と画像ファイルを後ろから順番に比較
  const p = snapshots.map(async (_, index) => {
    const currentIndex = snapshots.length - 1 - index;
    const result = await imgDiff(final, `${diffOutDir}/${currentIndex}.jpeg`);
    if (result !== 0 && firstMismatchedIndex === -1) {
      firstMismatchedIndex = currentIndex; // 最初に差分が出た画像のインデックス
    }
    return;
  });

  await Promise.all(p);
  console.log('index:', firstMismatchedIndex);
  console.log('diff!!', final, `${diffOutDir}/${firstMismatchedIndex}.jpeg`);
  const completeRender = snapshots[firstMismatchedIndex + 1];

  let clickEvent: ClickEvent[] = perfJson.traceEvents.filter((data: any) => {
    if (data?.name === 'EventDispatch' && data?.args?.data?.type === 'click') {
      return data;
    }
  });
  const duration = completeRender.ts - clickEvent[0].ts;
  const result = `click link: ${clickEvent[0].ts}\n
  completeRender: ${completeRender.ts}\n
  duration: ${duration / 1000}[ms]
  `;
  console.log(result);
}
