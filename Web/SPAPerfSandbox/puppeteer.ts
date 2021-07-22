const puppeteer = require('puppeteer');

(async () => {
  console.log("pu")
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});
  await page.waitFor(4000);

  await browser.close();
})();
