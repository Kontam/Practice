import { syncWithObject } from "./syncWithObject";
import { syncWithGenerator } from "./syncWithGenerator";

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

  //TODO: for await of を使わないジェネレーターのコードで試す
  await syncWithGenerator(asyncFuncs);
  await syncWithObject(asyncFuncs);
})();
