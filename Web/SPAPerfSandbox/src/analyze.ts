import {getTimelines} from './utils/getTimelines';
import {analyzeJson} from './utils/analyzeJson';

(async () => {
  const TIMELINE_DIR = 'timeline';
  const OUT_DIR_DIST = 'dist';
  const OUT_DIR_DIFF = 'diff';
  const jsons = getTimelines(TIMELINE_DIR);

  jsons.forEach(jsonPath => {
    const outDirDist = jsonPath
      .replace(TIMELINE_DIR, OUT_DIR_DIST)
      .replace(/[^\/]*.json$/, '');
    const outDirDiff = jsonPath
      .replace(TIMELINE_DIR, OUT_DIR_DIFF)
      .replace(/[^\/]*.json$/, '');
    analyzeJson(`../../${jsonPath}`, outDirDist, outDirDiff);
  });
})();
