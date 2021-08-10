const {parse} = require('babylon');

const code = process.argv.slice(2).join(' ');

const isNode = obj => {
  if (typeof obj !== 'object') {
    return false;
  }

  if (Array.isArray(obj)) {
    return obj.find(v => isNode(v)) !== undefined;
  }

  while (obj && 'constructor' in obj) {
    if (obj.constructor.name === 'Node') {
      return true;
    }
    obj = Object.getPrototypeOf(obj);
  }

  return false;
};

const getCode = node => code.substr(node.start, node.end - node.start);

const traverser = (node, exitVisitor, indent = 0) => {
  const str = `${` `.repeat(indent)}enter: ${node.type}'${getCode(node)}'`;
  console.log(str);

  if (!(node.type in exitVisitor)) {
    console.error(`unknown type ${node.type}`);
    const stringify = JSON.stringify(node, null, `  `);
    console.log(stringify);
    process.exit(1);
  }

  const res = {};
  Object.keys(node).forEach(key => {
    if (!isNode(node[key])) {
      return;
    }
    if (Array.isArray(node[key])) {
      res[key] = node[key].map(v => traverser(v, exitVisitor, indent + 2));
    } else {
      res[key] = traverser(node[key], exitVisitor, indent + 2);
    }
  });

  return exitVisitor[node.type](node, res, indent);
};

const exitVisitor = {
  File: (node, res) => res.program,
  Program: (node, res) => res.body,
  ExpressionStatement: (node, res) => {
    const expr = node.expression;
    return `${getCode(node)} = ${expr}`;
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

const results = traverser(parse(code), exitVisitor);
console.log(' ');
results.forEach(result => console.log(result));
