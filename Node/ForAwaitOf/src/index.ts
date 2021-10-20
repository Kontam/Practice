// asyncのfunction
function asyncFunc(num: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num);
    }, 1000);
  });
}

(async function() {
  // この辺でfor await ofを試す
  console.log(await asyncFunc(1));

  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        i: 0,
        next() {
          if (this.i < 3) {
            return Promise.resolve({value: this.i++, done: false});
          }

          return Promise.resolve({done: true, value: "x"});
        },
      };
    },
  };

  const asyncFunc1 = () => asyncFunc(1);
  const asyncFunc2 = () => asyncFunc(2);
  const asyncFuncs = [asyncFunc1, asyncFunc2];

  const promises = [asyncFunc(1), asyncFunc(2)];

  for await (let num of asyncFuncs) {
    console.log(num);
  }

  for await (let num of promises) {
    console.log('promises', num);
  }

  for await (let num of asyncIterable) {
    console.log("asyncIterable", num);
  }
})();
