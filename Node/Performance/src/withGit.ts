import {readFileSync} from 'fs';
import {execSync} from 'child_process';
import {runLightHouse} from './perf';
import {PerfConfig} from './types';

(async () => {
  const targetStr = readFileSync('target.json', 'utf8');
  if (typeof targetStr !== "string") return console.error("error", targetStr);
  const target = JSON.parse(targetStr);

  const configStr = readFileSync('config.json', 'utf8');
  if (typeof configStr !== "string") return console.error("error", configStr);
  const config = JSON.parse(configStr) as PerfConfig;
  execSync(`cd ${config.gitRoot}`);
  console.log(execSync('git status').toString());


  // await runLightHouse(target[0], 'withGit.json');
})();
