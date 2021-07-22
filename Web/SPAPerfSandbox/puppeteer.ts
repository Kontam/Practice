const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.tracing.start({path: 'trace.json'});
  await page.goto('http://192.168.3.7:3000/');
  await page.waitFor(3000);

  const links = await page.$$('.HeaderMenuItem__Container-reccei-0');
  if (links.length > 0) {
   await links[1].click();
  }
  await page.waitFor(3000);

  
  await page.tracing.stop();


  await browser.close();
})();
