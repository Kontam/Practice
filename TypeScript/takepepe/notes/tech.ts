## オブジェクトからFilterするときのテクニック
## Union型の中のneverが無視されることを利用する
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
