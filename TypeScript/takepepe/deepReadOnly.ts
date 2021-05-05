interface User {
  name: string;
  age: number | null;
  gender: 'male' | 'female' | 'other';
  birthplace?: string;
}

interface DeepUser {
  name: string;
  age: number | null;
  gender: 'male' | 'female' | 'other';
  birth: {
    day: Date;
    place?: {
      contry?: string | null
      state?: string
    }
  }
}

type Unwrap<T> = T extends {[k: string]: any} ? unknown
  : T extends any[] ? unknown
  : T;

type IsPremitive<T> = Unwrap<T> extends T ? T : never;

type DeepReadOnly<T> = {
  readonly [K in keyof T]: T[K] extends IsPremitive<T[K]> ? T[K]
  : DeepReadOnly<T[K]>
}

type Result = DeepReadOnly<DeepUser>
