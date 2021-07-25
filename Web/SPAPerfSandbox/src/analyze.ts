import * as fs from 'fs-extra';
import {ClickEvent, SnapShot} from '../types';
import {imgDiff} from './utils/jpgImgDiff';
import {getTimelines} from './utils/getTimelines';
import {analyzeJson} from './utils/analyzeJson';


(async () => {
  const TIMELINE_DIR = 'timeline';
  const OUT_DIR_ROOT = 'diff';
  const jsons = getTimelines(TIMELINE_DIR);

  jsons.forEach((jsonPath) => {
    const OUT_DIR = jsonPath.replace(TIMELINE_DIR, OUT_DIR_ROOT).replace(/[^\/]*.json$/,'');
    analyzeJson(`../../${jsonPath}`, OUT_DIR);
  });
})();
