import {Page} from "puppeteer";
import {Scenario} from "../src/classes/Scenario";

export default new Scenario({
    name: 'CheerHomeToStart',
    outDir: 'cheerLP/homeToStart',
    startUrl: 'http://192.168.3.7:3000/',
    triger: async (page: Page) => {
      const links = await page.$$('.HeaderMenuItem__Container-reccei-0');
      if (links.length > 0) {
       await links[1].click();
      }
    }
  });

