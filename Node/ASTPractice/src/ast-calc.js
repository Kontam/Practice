const {parse} = require('babylon');
const {traverser} = require('./traverser');
const {exitVisitor} = require('./visitor');

const code = process.argv.slice(2).join(' ');
console.log(code);

const results = traverser(code, parse(code), exitVisitor);
console.log(' ');
results.forEach(result => console.log('result', result));
