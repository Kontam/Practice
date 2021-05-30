import * as fs from 'fs';
import * as lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

export async function runLightHouse(url: string, filename: string): Promise<void> {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance'],
    port: chrome.port,
  };
  const runnerResult = await lighthouse(url, options);

  const report = runnerResult.report;
  fs.writeFileSync(filename, report);

  console.log('Report is done for', runnerResult.lhr.finalUrl);
  console.log(
    'Performance score was',
    runnerResult.lhr.categories.performance.score * 100,
  );
};
