// asyncのfunction
function asyncFunc(num: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num);
    }, 1000);
  });
}

async function syncronize2(asyncFuncs: Array<() => Promise<any>>) {
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        i: -1,
        async next() {
          if (this.i < asyncFuncs.length -1) {
            this.i+=1;
            return Promise.resolve({done: false, value: await asyncFuncs[this.i]()});
          }
          return Promise.resolve({done: true, value: undefined});
        }
      }
    }
  }
  for await (let result of asyncIterable) {
    console.log("done", result);
  }
}

async function syncronize(asyncFuncs: Array<() => Promise<any>>) {
  /* エラー　返り値がIteratorプロトコルではない
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        i: 0,
        next() {
          if (this.i < asyncFuncs.length -1) {
            return asyncFuncs[this.i]();
          }
          return Promise.resolve();
        }
      }
    }
  }
 */
  const asyncGenerator = async function* asyncGenerator() {
    let i=0;

    while (i<asyncFuncs.length) {
      yield asyncFuncs[i]();
      i++;
    }
  }

  for await (let result of asyncGenerator()) {
    console.log("done", result);
  }
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

  await syncronize2(asyncFuncs);
})();
