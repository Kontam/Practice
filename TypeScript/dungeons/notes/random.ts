
// これで特定の配列型が空配列かどうかを判定できる
type IsEmpty<T extends any[]> = T["length"] extends 0 ? true : false; 

