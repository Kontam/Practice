// オブジェクトからFilterするときのテクニック
// Union型の中のneverが無視されることを利用する
type Target = {
  x: 1,
  y: "test",
  z: 3,
}

// filterしたい対象をneverへ、残すもののvalueをkey名にする
type StringToNever<T> = {[K in keyof T]: T[K] extends string ? never : K};

// valueをUnionにする。Unionの中のneverは自動的に消える
type NonNeverKeys<T> = {[K in keyof T]: T[K]}[keyof T];

// 絞り込んだkey名でPickする
type FilterString<T> = Pick<T, NonNeverKeys<StringToNever<T>>>;

// 結果
type Result = FilterString<Target>


// 返り値がvoidの関数は値を返す関数と互換性がある
// neverとvoidは互換性がある
type ReturnVoid = (arg: any) => void;
// これが型エラーにならない。conditionalで判定する時に注意
const X: ReturnVoid = (arg: number) => arg;
