const getCode = require('./traverser');
// const getCode = node => code.substr(node.start, node.end - node.start);

const exitVisitor = {
  File: (node, res) => res.program,
  Program: (node, res) => res.body,
  ExpressionStatement: (node, res) => {
    const expr = node.expression;
    return `${getCode(node)} = ${expr}`;
  },
  BinaryExpression: (node, res, indent) => {
    const str = `${' '.repeat(indent)} ${res.left} ${node.operator} ${res.right}`;
    console.log(str);
    const { left, right } = res;
    switch (node.operator) {
      case '+': return left + right;
      case '*': return left * right;
      case '-': return left - right;
      case '/': return left / right;
      case '%': return left % right;
      default: throw new Error('対応していない二項演算子');
    }
  },
  NumericLiteral: (node, res, indent) => {
    const str = `${' '.repeat(indent)} value: ${node.value}`;
    console.log(str);
    return node.value;
  }
}

module.exports = { exitVisitor };
