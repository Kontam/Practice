// interfaceだとinferできない　typeだとできる
interface User {
  name: string;
  age: number | null;
  gender: 'male' | 'female' | 'other';
  birthplace?: string;
}

type TUser= {
  name: string;
  age: number | null;
  gender: 'male' | 'female' | 'other';
  birthplace?: string;
}

type Unwrap<T> = T extends {[key: string]: infer X} ? X : unknown;

type I = Unwrap<User>;
type T = Unwrap<TUser>;
