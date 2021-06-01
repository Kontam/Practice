import {readFileSync} from 'fs';
import {execSync} from 'child_process';
import {runLightHouse} from './perf';
import {PerfConfig} from './types';
import { format } from 'date-fns';

(async () => {
  const CWD = process.cwd();
  const DATE_FORMAT = 'yyyyMMdd-hhmmss';
  const targetStr = readFileSync('target.json', 'utf8');
  if (typeof targetStr !== "string") return console.error("error", targetStr);
  const target = JSON.parse(targetStr);

  const configStr = readFileSync('config.json', 'utf8');
  if (typeof configStr !== "string") return console.error("error", configStr);
  const config = JSON.parse(configStr) as PerfConfig;
  // Todo: ディレクトリ移動
  process.chdir(config.gitRoot);
  const gitLogResult = execSync(`git log | grep commit -m1`).toString();
  const lastCommitHash = gitLogResult.split(' ')[1];

  const timeStamp = format(new Date(), DATE_FORMAT);

  process.chdir(CWD);
  await runLightHouse(target[0], `${lastCommitHash}_${timeStamp}.json`, 'dist');
})();
