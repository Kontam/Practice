import {readFileSync} from 'fs';
import {runLightHouse} from './perf';

(async () => {
  const targetStr = readFileSync('target.json', 'utf8');
  if (typeof targetStr !== "string") return console.error("error", targetStr);
  const target = JSON.parse(targetStr);

  const configStr = readFileSync('config.json', 'utf8');
  if (typeof configStr !== "string") return console.error("error", configStr);
  const config = JSON.parse(configStr);
  await runLightHouse(target[0], 'withGit.json');
})();
