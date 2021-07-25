const fs = require('fs-extra');

exports.scenario = async function(page) {
  const FILENAME = 'timeline/Konta/homeToProfile.json';
  const START_URL = 'https://konkonta.com/';

  fs.ensureFile(FILENAME);
  
  await page.goto(START_URL);
  const links = await page.$$('.menu-item');

  await page.tracing.start({path: FILENAME, screenshots: true});

  if (links.length > 0) {
   await links[1].click();
  }

  await page.waitFor(10000);
  
  await page.tracing.stop();
}
