// これで特定の配列型が空配列かどうかを判定できる
type IsEmpty<T extends any[]> = T["length"] extends 0 ? true : false; 

// 引数 -> Union は残余引数構文を利用することで変換できる
type toUnion<T, U extends any[]> = ((...args: U) => any) extends (head: infer Head, ...tail: infer Tail) => any ? T | Head : unknown;
// これを再帰的に行うと引数をいくつでも受け付けてUnionに変換できる
type Union2<T, U extends any[]> = {
  0: T,
  1: ((...args: U) => any) extends (head: infer Head, ...tail: infer Tail) => any ? Union2<T | Head, Tail> : unknown;
}[U["length"] extends 0 ? 0 : 1];

// 再起的な型を定義する時には上記のようにオブジェクトで分岐させると回避できる
