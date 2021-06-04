export function synchronous(asyncFuncs: Array<() => Promise<any>>) {
  asyncFuncs.reduce <
    Promise<any>>((acc, cur) => {
      return acc.then(cur);
    }, Promise.resolve());
}

/*
const x = new Promise(() => {})
const ps = [x, x, x, x, ]
ps[0].then(() => ps[1].then(() => ps[2].then(() => ps[3].then(() => {}))))

const n = ps[0].then(() => ps[1].then);
const n2 = n.then(() => ps[2]);
*/
