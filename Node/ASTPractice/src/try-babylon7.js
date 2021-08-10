const babylon = require('babylon');
const printAST = require('ast-pretty-print');

const src = `console.log('hello world')`;

const ast = babylon.parse(src);
console.log(printAST(ast, true));
