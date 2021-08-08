import {ClickEvent, ResultData, SnapShot} from '../../../types';
import fs from 'fs-extra';
import {imgDiff} from './jpgImgDiff';
import { syncronize } from '../../utils/syncronize';

export async function analyzeJson(
  jsonPath: string,
  outDirDist: string,
  outDirDiff: string,
): Promise<ResultData> {
  const perfJson = await import(jsonPath);

  const snapshots: SnapShot[] = perfJson.traceEvents.filter((data: any) => {
    if ('snapshot' in data.args) {
      return data;
    }
  });

  // 画像ファイル書き出し
  snapshots.forEach((data, index) => {
    return fs.outputFileSync(
      `${outDirDist}/${index}.jpeg`,
      data.args.snapshot,
      {encoding: 'base64'}
    );
  });

  const finalIndex = snapshots.length - 1;
  const final = `${outDirDist}/${finalIndex}.jpeg`;

  let firstMismatchedIndex = -1;
  // 最後の１枚と画像ファイルを後ろから順番に比較
  const asyncFuncs = snapshots.map((_, index) => async () => {
    const currentIndex = finalIndex - index;
    const result = await imgDiff(
      final,
      `${outDirDist}/${currentIndex}.jpeg`,
      `${outDirDiff}/${finalIndex}-${currentIndex}.jpeg`,
    );
    if (result !== 0 && firstMismatchedIndex === -1) {
      firstMismatchedIndex = currentIndex; // 最初に差分が出た画像のインデックス
    }
    return;
  });

  await syncronize(asyncFuncs);
  const completeRender = firstMismatchedIndex === -1 
   ? snapshots[snapshots.length - 1] // 全ての画像で差分が出たら最後のsnapshotと比較
   : snapshots[firstMismatchedIndex + 1];

  const clickEvent: ClickEvent[] = perfJson.traceEvents.filter((data: any) => {
    if (data?.name === 'EventDispatch' && data?.args?.data?.type === 'click') {
      return data;
    }
  });
  const duration = completeRender.ts - clickEvent[0].ts;
  return { duration: duration / 1000 }; 
}
