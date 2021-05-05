type FruitsMap = {
  banana: { name: "banana", price: number},
  apple: { name: "apple", price: number},
  orange: { name: "orange"}
};

type IsExtends<T, U> = T extends U ? T : never;
type ReplaceNever<T, U> = {[K in keyof T]: IsExtends<T[K], U>}
type NonNeverKyes<T> = {[K in keyof T]: T[K] extends never ? never : K}[keyof T]

type PickUP<T, U> = Pick<T, NonNeverKyes<ReplaceNever<T, U>>>;

type PickedFruits = PickUP<FruitsMap, { price: number}>
