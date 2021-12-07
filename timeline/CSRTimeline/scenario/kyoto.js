const { Scenario } = require('rendering-timer');

module.exports = new Scenario({
  name: 'kyoto/index_to_news',
  outDir: 'kyoto/index_to_news',
  startUrl: 'https://www.pref.kyoto.jp/index.html',
  triger: async (page) => {
    const link = await page.$('[href="/news/index.html"]');
    if(!link) return console.error('link was not found')
    await link.click();
  } 
})
