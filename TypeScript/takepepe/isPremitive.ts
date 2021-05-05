type Obj = { name: string, id: number };

type unwrap<T> = T extends {[k: string]: infer X} ? X
  : T extends (infer A)[] ? A
  : T;

type isPremitive<T> = unwrap<T> extends T ? T : never;

type Result = isPremitive<Obj>;
type Valid = isPremitive<number>

