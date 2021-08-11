const {getCode} = require('./utils/getCode');

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

const traverser = (code, node, exitVisitor, indent = 0) => {
  const str = `${` `.repeat(indent)}enter: ${node.type}'${getCode(code, node)}'`;
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
      res[key] = node[key].map(v => traverser(code, v, exitVisitor, indent + 2));
    } else {
      res[key] = traverser(code, node[key], exitVisitor, indent + 2);
    }
  });

  return exitVisitor[node.type](node, res, indent);
};

module.exports = { traverser }
