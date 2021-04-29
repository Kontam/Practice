// Union
type MyUnion<T, A extends any[]> = {
  0: T,
  1: (...arg: A) => any extends (head: infer Head, ...tail: infer Tail) => any ? Union<A | Head, Tail> : never;
}[A['length'] extends 0 ? 0 : 1]; 

// Complete the `Random` type.
type Random = unknown;

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
