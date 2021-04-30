// Complete the `Random` type.
type Union<T, U extends any[]> = {
  0: T,
  1: ((...args: U) => any) extends (h: infer Head, ...args: infer Tail) => any ? Union<T | Head, Tail> : never;
}[U["length"] extends 0 ? 0 : 1];

type Random = <T, U extends any[]>(head: T, ...args: U) => Union<T,U>;

declare const random: Random;

const a = { value: 1 } as const;
const b = { value: 2 } as const;
const c = { value: 3 } as const;

// Expected:
// The `random` return type should be assignable this type annotation.

const valueAB = random(a, b);
const valueABC = random(a, b, c);

const x: { readonly value: 1 } | { readonly value: 2 } = valueAB;
const y:
  | { readonly value: 1 }
  | { readonly value: 2 }
  | { readonly value: 3 } = valueABC;
