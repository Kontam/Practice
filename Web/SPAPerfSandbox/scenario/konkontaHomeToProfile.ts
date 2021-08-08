import {Page} from 'puppeteer';
import {Scenario} from '../src/classes/Scenario';

export default new Scenario({
  name: 'KonkonProfile',
  outDir: 'Konta/homeToProfile',
  startUrl: 'https://konkonta.com/',
  triger: async (page: Page) => {
    const links = await page.$$('.menu-item');
    if (links.length > 0) {
      await links[1].click();
    }
  },
});
