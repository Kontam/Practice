// 型の教科書　p.56
const json = {
  "banana": {
    "price": 200,
    "color": "#ffd800",
    "displayName": "ばなな",
    "country": "Philippines"
  },
    "apple": {
    "price": 150,
    "color": "#e9002c",
    "displayName": "りんご"
  },
  "orange": {
    "price": 100,
    "color": "#ff7e00",
    "displayName": "みかん",
    "farmer": "Taro"
  }
}

// 汎用Utility
type Unwrap<T> = T extends {[key: string]: infer U} ? U
  : T extends (infer X)[] ? X
  : T;
type UnionToInterSection<T> = (T extends any ? ((arg: T) => any) : unknown) extends (arg: infer X) => any ? X : unknown; 
type SelfPick<T> = Pick<T, keyof T>;

// 分割Type
type AllUnion<T> = UnionToInterSection<Unwrap<T>>
type AllType<T> = SelfPick<AllUnion<T>>
type CommonType<T> = SelfPick<Unwrap<T>>
type OptionalType<T> = Partial<Omit<AllType<T>, keyof CommonType<T>>>

type OptionalMerge<T> = SelfPick<CommonType<T> & OptionalType<T>>;

type Fruit = OptionalMerge<typeof json>
