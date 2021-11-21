const fs = require('fs');

const src = fs.createReadStream('src.txt', {
  encoding: 'utf8',
  highWaterMark: 1,
});
const dest = fs.createWriteStream('dest.txt', 'utf8');

let count = 0;
src.on('data', chunk => {
  count++;
  console.log('count:', count);
  console.log('chunk:', chunk);
  //dest.write(chunk)
});
src.on('end', () => dest.end());
