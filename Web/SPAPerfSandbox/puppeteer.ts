const puppeteer = require('puppeteer');
const speedline = require('speedline');
const FILENAME = 'test.json';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
  });
  
  try {

  const page = await browser.newPage();
  await page.goto('http://192.168.3.7:3000/');

  const links = await page.$$('.HeaderMenuItem__Container-reccei-0');
  await page.tracing.start({path: FILENAME, screenshots: true});
  if (links.length > 0) {
   await links[1].click();
  }
  await page.waitFor(10000);

  
  await page.tracing.stop();

  /*
  const result = await speedline(FILENAME);
  console.log(result);
 */


  await browser.close();
  } catch(e) {
    console.error(e);
  } finally {
    browser.close(); 
  }
})();
