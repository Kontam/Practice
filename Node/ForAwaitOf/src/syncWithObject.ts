
export async function syncWithObject(asyncFuncs: Array<() => Promise<any>>) {
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        i: -1,
        async next() {
          if (this.i < asyncFuncs.length -1) {
            this.i+=1;
            return {done: false, value: await asyncFuncs[this.i]()};
          }
          return {done: true, value: undefined};
        }
      }
    }
  }
  for await (let result of asyncIterable) {
    console.log("done", result);
  }
}
