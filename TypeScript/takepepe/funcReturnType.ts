const MyObject = {
  count: 0,
  increment() {
    this.count++;
  },
  decrement() {
    this.count--;
  },
  pointLabel(unit: string) {
    return `${this.count}${unit}`;
  },
  computedPoint(compute = (count: number):number => count) {
    return compute(this.count);
  },
  getPointLabel() {
    return (unit = '') => {
      return this.pointLabel(unit);
    }
  }
}

type ReturnTypeKeys<T, U> = {[K in keyof T]: T[K] extends (arg: any) => U ? K : never}[keyof T]

type ReturnTypeFunc<T, U> = Pick<T, ReturnTypeKeys<T, U>>;

// voidは不可能 voidを返す関数型は値を返す関数型と互換性があるため
type Result = ReturnTypeFunc<typeof MyObject, number>;

