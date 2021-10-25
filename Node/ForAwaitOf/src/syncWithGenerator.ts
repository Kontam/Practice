
async function SyncWithGenerator(asyncFuncs: Array<() => Promise<any>>) {
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
