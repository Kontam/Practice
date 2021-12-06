const { Scenario } = require('rendering-timer');

module.exports = new Scenario({
  name: 'tokyo/index_to_kurashi',
  outDir: 'tokyo/index_to_kurashi',
  startUrl: 'https://www.metro.tokyo.lg.jp/index.html',
  triger: async (page) => {
    const link = await page.$('#tmp_glist2');
    if(!link) return console.error('link was not found')
    await link.click();
  } 
})
