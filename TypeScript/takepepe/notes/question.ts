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


// p.53 UnionGuardの必要性
// 昔は必要だった？　Unwrap<typeof json>でchildNodeのUnionにうまくならなかったかも知れない
// 5/6現在は不要だった
