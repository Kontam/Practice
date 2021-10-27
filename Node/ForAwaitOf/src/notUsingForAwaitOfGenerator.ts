
export async function notUsingForAwaitOfGenerator(asyncFuncs: Array<() => Promise<any>>) {
  const asyncGenerator = async function* asyncGenerator() {
    let i=0;

    while (i<asyncFuncs.length) {
      yield asyncFuncs[i]();
      i++;
    }
  }

  for (let result of asyncGenerator() {
    console.log("done", result);
  }
}
