interface User {
    name: string;
    age: number | null;
    gender: 'male' | 'female' | 'other';
    birthplace?: string;
}

// Tがユニオン　Uが取り除きたい型（複数の時はUnion）
type Diff<T, U> = T extends U ? never : T;

type NoNullable<T> = {[K in keyof T]: Diff<T[K], null>}

type R = NoNullable<User>;
