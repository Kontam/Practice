
// Replace the RHS of the following `RequiredKeys` type to match the expected section.
type RequiredKeys<T> = {[K in keyof T]: {} extends Pick<T, K> ? never : K}[keyof T]


type User = {
  id: number;
  lastName: string;
  firstName: string;
  middleName?: string;
};

const validKeys: RequiredKeys<User>[] = ["id", "lastName", "firstName"];

// @ts-expect-error 'middleName' is an optional key in User type
const invalidKeys: RequiredKeys<User>[] = ["middleName"];
