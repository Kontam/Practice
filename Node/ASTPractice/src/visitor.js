const exitVisitor = {
  File: (node, res) => res.program,
  Program: (node, res) => res.body,
  ExpressionStatement: (node, res) => {
    const expr = node.expression;
    return `Expression = ${expr}`;
  },
  BinaryExpression: (node, res, indent) => {
    const str = `${' '.repeat(indent)} ${res.left} ${node.operator} ${
      res.right
    }`;
    console.log(str);
    const {left, right} = res;
    switch (node.operator) {
      case '+':
        return left + right;
      case '*':
        return left * right;
      case '-':
        return left - right;
      case '/':
        return left / right;
      case '%':
        return left % right;
      default:
        throw new Error('対応していない二項演算子');
    }
  },
  NumericLiteral: (node, res, indent) => {
    const str = `${' '.repeat(indent)} value: ${node.value}`;
    console.log(str);
    return node.value;
  },
  CallExpression: (node, res, indent) => {
    return node.value;
  },
  MemberExpression: (node, res, indent) => {
    return node.value;
  },
  Identifier: (node, res, indent) => {
    return node.value;
  },
  StringLiteral: (node, res, indent) => {
    return node.value;
  },
};

module.exports = { exitVisitor };
