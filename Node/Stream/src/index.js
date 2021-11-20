const fs = require('fs');

const src = fs.createReadStream('/Users/kanta/Downloads/RJ298251.zip', 'utf8');
const dest = fs.createWriteStream('dest.text', 'utf8');

src.on('data', chunk => {
  console.log('chunk', chunk);
  //dest.write(chunk)
});
src.on('end', () => dest.end());

