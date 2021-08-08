import {getTimelines} from './utils/getTimelines';
import {analyzeJson} from './utils/analyzeJson';
import path from 'path';
import {ScenarioResult} from '../../types';
import {outputResuts} from './utils/outputResults';
import fs from 'fs-extra';
import {format} from 'date-fns';
import { convertToCSV } from "./utils/convertToCSV";

(async () => {
  const TIMELINE_DIR = 'timeline';
  const OUT_DIR_DIST = 'dist';
  const OUT_DIR_DIFF = 'diff';
  const ARCHIVE_DIR = 'archive';
  const DATE_FORMAT = 'yyyyMMdd-HH:mm:ss';
  const jsons = getTimelines(TIMELINE_DIR);

  const results: ScenarioResult[] = [];

  if (fs.existsSync(OUT_DIR_DIFF)){ 
    await fs.move(OUT_DIR_DIFF, `${ARCHIVE_DIR}/${OUT_DIR_DIFF}/${format(new Date(), DATE_FORMAT)}`);
  }
  if (fs.existsSync(OUT_DIR_DIST)){ 
    await fs.move(OUT_DIR_DIST, `${ARCHIVE_DIR}/${OUT_DIR_DIST}/${format(new Date(), DATE_FORMAT)}`);
  }
  const promises = jsons.map(async jsonPath => {
    const scinarioName = path.dirname(jsonPath).replace('timeline/', '');
    const outDirDist = jsonPath
      .replace(TIMELINE_DIR, OUT_DIR_DIST)
      .replace(/\.json$/, '');
    const outDirDiff = jsonPath
      .replace(TIMELINE_DIR, OUT_DIR_DIFF)
      .replace(/\.json$/, '');

    const singleData = await analyzeJson(path.resolve(__dirname, `../../${jsonPath}`), outDirDist, outDirDiff);

    const exists = results.find(result => result.name === scinarioName);
    if (exists) {
      exists.data.push(singleData);
      return;
    }
    results.push({
      name: scinarioName,
      data: [singleData],
    });
  });

  await Promise.all(promises);

  outputResuts(results);
  const csv = await convertToCSV(results);
  console.log(csv);

})();
