import puppeteer from 'puppeteer';
import {getScenarios} from './utils/getScenarios';
import {syncronize} from './utils/syncronize';

const SCENARIO_DIR = 'scenario';

(async () => {
  const scenarios: string[] = getScenarios(SCENARIO_DIR);
  const asyncFuncs = scenarios.map(sc => () => runScenario(sc));
  syncronize(asyncFuncs);
})();

async function runScenario(sc: string) {
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
  });
  try {
    const {scenario} = require(`../${sc}`);
    const page = await browser.newPage();
    await scenario(page);
  } catch (e) {
    console.error(e);
  } finally {
    browser.close();
  }
}
