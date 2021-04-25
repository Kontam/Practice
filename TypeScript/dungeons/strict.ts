type Strict<T> = {[K in keyof T]-?: T[K]};

// Expected

type SomeObjectType = {
  name?: string;
  age?: number;
};

declare const strictObj: Strict<SomeObjectType>;

const userName: string = strictObj.name; // typeof name should not be undefined / null
const age: number = strictObj.age; // typeof age should not be undefined / null
