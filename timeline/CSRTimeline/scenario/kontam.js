const { Scenario } = require('rendering-timer');

module.exports = new Scenario({
  name: 'kontam/index_to_kontam',
  outDir: 'kontam/index_to_kontam',
  startUrl: 'http://localhost:3000/',
  triger: async (page) => {
    const links = await page.$$('.HeaderMenuList__Item-sc-1r2urzb-1');
    const link = links[1];
    if(!link) return console.error('link was not found')
    await link.click();
  } 
})
