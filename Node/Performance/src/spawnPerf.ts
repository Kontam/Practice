import * as child_process from 'child_process';
import { computeMedianRun } from 'lighthouse/lighthouse-core/lib/median-run.js';
const lighthouseCli = require.resolve('lighthouse/lighthouse-cli');

const results = [];
for (let i = 0; i < 1; i++) {
  console.log(`Running Lighthouse attempt #${i + 1}...`);
    const {status = -1, stdout} = child_process.spawnSync('node', [
          lighthouseCli,
          'https://konkonta.com',
          '--output=json'
        ]);

  if (status != 0) {
    console.log('Lighthouse faild, skipping run...');
    continue;
  }
  results.push(JSON.parse(stdout));
}

const median = computeMedianRun(results);
console.log('Median performance score was', median.categories.performance.score * 100);

console.log('categories', median.categories);
console.log('obj', median.categories.performance.auditRefs);
