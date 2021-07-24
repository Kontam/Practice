import puppeteer from 'puppeteer';
import homeToStartScenario from '../scenario/homeToStart';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
  });
  
  try {

  const page = await browser.newPage();
  await homeToStartScenario(page);

  await browser.close();
  } catch(e) {
    console.error(e);
  } finally {
    browser.close(); 
  }
})();
