const code = '1+2 * (3+4)';

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
      res[key].map(v => traverser(v, exitVisitor, indent + 2));
    } else {
      res[key] = traverser(node[key], exitVisitor, indent + 2);
    }
  });

  return exitVisitor[node.type](node, res, indent);
};

module.exports = { getCode, traverser }
