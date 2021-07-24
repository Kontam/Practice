import puppeteer, {Page,Browser} from 'puppeteer';
import {getScenarios} from './utils/getScenarios';

const SCENARIO_DIR = 'scenario';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
  });
  const scenarios: string[] = getScenarios(SCENARIO_DIR);
  scenarios.forEach((sc) => runScenario(sc, browser));
})();

async function runScenario(sc: string, browser: Browser) {
    try {
      console.log('start:', sc);
      const {scenario} = require(`../${sc}`);
      const page = await browser.newPage();
      await scenario(page);

      await browser.close();
    } catch (e) {
      console.error(e);
    } finally {
      browser.close();
    }
};
