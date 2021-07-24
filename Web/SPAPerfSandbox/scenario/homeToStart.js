
exports.scenario = async function(page) {
  const FILENAME = 'timeline/homeToStart.json';
  const START_URL = 'http://192.168.3.7:3000/';
  
  await page.goto(START_URL);
  const links = await page.$$('.HeaderMenuItem__Container-reccei-0');

  await page.tracing.start({path: FILENAME, screenshots: true});

  if (links.length > 0) {
   await links[1].click();
  }

  await page.waitFor(10000);
  
  await page.tracing.stop();
}
