
const getCode = (code, node) => code.substr(node.start, node.end - node.start);

module.exports = {
  getCode,
};
