type FruitsMap = {
  banana: { name: "banana", price: number},
  apple: { name: "apple", price: number},
  orange: { name: "orange"}
};

type ExpectedKyes<T, U> = {[K in keyof T]: T[K] extends U ? never : K}[keyof T];

type DropOff<T, U> = Pick<T, ExpectedKyes<T, U>>;

type PickedFruits = DropOff<FruitsMap, { price: number}>
