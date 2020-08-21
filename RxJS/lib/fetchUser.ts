export function fetchUser(type: string) {
  return new Promise<any>( resolve => setTimeout(() => resolve([
    {
      id: 1,
      name: "jone",
    },
    {
      id: 2,
      name: "jone2",
    },
    {
      id: 3,
      name: "jone3",
    },
  ]), 2000))
}
