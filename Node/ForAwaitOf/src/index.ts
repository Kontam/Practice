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

  const asyncFunc1 = () => asyncFunc(1);
  const asyncFunc2 = () => asyncFunc(2);
  const asyncFuncs = [asyncFunc1, asyncFunc2];

  const promises = [asyncFunc(1), asyncFunc(2)];

  for await (let num of asyncFuncs) {
    console.log(num);
  }

  for await (let num of promises) {
    console.log("promises", num);
  }
  
})();
