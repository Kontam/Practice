import puppeteer from 'puppeteer';
import {getScenarios} from './utils/getScenarios';
import {syncronize} from '../utils/syncronize';
import path from 'path';
import {Scenario} from '../classes/Scenario';
import fs from 'fs-extra';
import { format } from 'date-fns';

const SCENARIO_DIR = 'scenario';
const TIMELINE_DIR = 'timeline';
const ARCHIVE_DIR= 'archive/timeline';
const width = 1280;
const height = 900;
const DATE_FORMAT = 'yyyyMMdd-HH:mm:ss';

export const runAudit = async (args: any) => {
  const times = args["--times"] || 1;
  const names = args["--scenario"] ? [args["--scinario"]] : [];
  if (fs.existsSync(TIMELINE_DIR)) {
    fs.ensureDir(ARCHIVE_DIR);
    await fs.move(TIMELINE_DIR, `${ARCHIVE_DIR}/${format(new Date(), DATE_FORMAT)}`);
  }
  const scenarios: string[] = getScenarios(SCENARIO_DIR);
  const asyncFuncs: Array<() => Promise<void>> = [];
  scenarios.forEach(sc => {
    for (let i = 0; i <times; i++) {
      asyncFuncs.push(() => {
        return runScenario(sc,i,names);
      });
    }
  });
  syncronize(asyncFuncs);
}


async function runScenario(sc: string, lap: number, names: string[]) {
  console.log(names, "runScenario")
  const module = await import(path.resolve(__dirname, `../../${sc}`));
  const scenario: Scenario = module.default;
  if (names.length > 0 && !names.includes(scenario.name)) {
    return; 
  }

  const browser = await puppeteer.launch({
    headless: false,
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({width, height})
    await scenario.run(page, lap);
  } catch (e) {
    console.error(e);
  } finally {
    browser.close();
  }
}