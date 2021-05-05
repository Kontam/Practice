const MyObject = {
  name: 'my name',
  getComputedPointLabel(
    options: {point: number, unit: string},
    compute= (arg: number) => arg
  ){
    return `${compute(options.point)}${options.unit}`
  }
}

type RT<T> = T extends (arg: any, second: infer X) => any ? X : never;
type AllArgs<T> = T extends (...args: [ ...infer X] ) => any ? X : never;

type A = RT<typeof MyObject.name>
type B = RT<typeof MyObject.getComputedPointLabel>
type C = AllArgs<typeof MyObject.getComputedPointLabel>;
