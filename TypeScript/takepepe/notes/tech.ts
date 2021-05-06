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

// 2つのオブジェクトから共通のプロパティのキー型を作る場合はUnionのtypeof
// 2つのオブジェクトの全てのキーを取り出す時はIntersectionのtypeof
// これらをキーではなくオブジェクト型としたい場合はUnion,Intersectionになっている型を自分のkeyofでPickさせる

// 2つのオブジェクトのうち共通ではないキーを取り出す時は全てのキーから共通のキーをExclude

// intersectionに


// UnionToInterSectionの最初のconditionalの必要性
type R<T> = (arg: T) => any;
type L<T> = T extends any ? (arg: T) => any : unknown;
// この２つの違いは引数がUnionなのか、関数型全体がUnionなのかで差が出る
// (arg: type1 | type2) => anyか、　(arg: type1) => any | (arg: type2) => anyなのか
