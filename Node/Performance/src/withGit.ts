import {readFileSync} from 'fs';
import {execSync} from 'child_process';
import {runLightHouse} from './perf';
import {PerfConfig} from './types';
import { format } from 'date-fns';

type Target = {
  name: string,
  path: string,
}

(async () => {
  const CWD = process.cwd();
  const DATE_FORMAT = 'yyyyMMdd-hhmmss';
  const targetStr = readFileSync('target.json', 'utf8');
  if (typeof targetStr !== "string") return console.error("error", targetStr);
  const target:Target[] = JSON.parse(targetStr);

  const configStr = readFileSync('config.json', 'utf8');
  if (typeof configStr !== "string") return console.error("error", configStr);
  const config = JSON.parse(configStr) as PerfConfig;

  process.chdir(config.gitRoot);
  const gitLogResult = execSync(`git log | grep commit -m1`).toString();
  const lastCommitHash = gitLogResult.split(' ')[1];

  const timeStamp = format(new Date(), DATE_FORMAT);

  process.chdir(CWD);
  // TODO: promiseを順番に実行する　並列でエラーが出ているらしい
  const promises = target.map((t) => {
    return runLightHouse(t.path, `${lastCommitHash}_${timeStamp}.json`, `dist/${t.name}`);
  });
})();
