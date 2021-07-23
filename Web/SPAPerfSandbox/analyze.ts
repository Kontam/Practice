import * as Diff from 'diff';
import colors from 'colors';
import perfJson from './test.json';
import { SnapShot } from './types';

let snapshots: SnapShot[] = perfJson.traceEvents.filter((data, index) => {
  if ('snapshot' in data.args) {
    return data;
  }
});

console.log("length", snapshots.length);
const first = snapshots[17].args.snapshot;
const second = snapshots[18].args.snapshot;

console.log(first);
console.log(second);

snapshots.forEach((data, index) => {
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
