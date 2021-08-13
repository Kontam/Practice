import { testName } from "./testName";
console.log("index.ts", testName.create());

export = {
  rules: {
    "testName": testName,
  },
  configs: {
    all: {
      plugins: ["plugin-name"],
      rules: {
        "testName": "error",
      }
    },
  },
};
