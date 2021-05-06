// ２つのオブジェクトの抽象型を作るUtility　Mergeを作ってみた
type Banana = {
"price": number
"color": string
"displayName": string
"country": string
}
type Apple = {
"price": number
"color": string
"displayName": string
}

type Common<T, U> = Pick<U | T, keyof (U | T)>
type All<T, U> = Pick<U & T, keyof (U & T)>
type Optional<T, U> = Partial<Omit<All<T,U>, keyof Common<T,U>>>

type Merge<T, U> = Pick<Common<T,U> & Optional<T,U>, keyof (Common<T,U> & Optional<T,U>)>;

type Merged = Merge<Apple, Banana>
