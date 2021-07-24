import * as Diff from 'diff';
import colors from 'colors';
import perfJson from '../test.json';
import * as fs from 'fs-extra';
import {SnapShot} from '../types';

const OUT_DIR = './dist';

let snapshots: SnapShot[] = perfJson.traceEvents.filter((data, index) => {
  if ('snapshot' in data.args) {
    return data;
  }
});

console.log('length', snapshots.length);

snapshots.forEach((data, index) => {
  fs.outputFile(
    `${OUT_DIR}/${index}.jpeg`,
    data.args.snapshot,
    {encoding: 'base64'},
    err => {
      console.error('outputFile', err);
    },
  );
  console.log(index, data.ts);
});
/*
const diff = Diff.diffChars(first, second);
console.log(diff);

diff.forEach((part: any) => {
  const c = part.added ? 'green':
   part.removed ? 'red' : 'grey'; 
  process.stderr.write(part.value[c]);
});
*/
