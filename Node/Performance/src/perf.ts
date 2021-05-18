import * as fs from 'fs';
import * as lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

(async () => {
    const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
    const options = {logLevel: 'info', output: 'html', onlyCategories: ['performance'], port: chrome.port};
    const runnerResult = await lighthouse('https://cheer.konkonta.com', options);

    const reportHtml = runnerResult.report;
    fs.writeFileSync('lhreport.html', reportHtml);

    console.log('Report is done for', runnerResult.lhr.finalUrl);
    console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);
})();
