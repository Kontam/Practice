const {transform} = require('@babel/core');
const syntaxTypeScript = require('@babel/plugin-syntax-typescript').default;

const plugin = babel => {
  const {traverse, types: t, template, version} = babel;

  console.log(version);

  return {
    name: 'my-plugin-name',
    inherits: syntaxTypeScript,
    pre() {
      // thisはvisitor関数の第二引数になる thisを使うのでアロー関数ではだめ
      this.hoge = 'hoge';
      console.log('pre, before traverse');
    },
    post() {
      console.log('post, after traverse', this.hoge);
    },
    visitor: {
      Program: (nodePath, state) => {
        state.hoge = 'ほげ';
      },
      BinaryExpression: (nodePath, state) => {
        console.log(t.isExpression(nodePath));
        console.log(nodePath.node.operator);
      },
    },
  };
};

transform('let a: number = 1+2', {plugins: [plugin]});
