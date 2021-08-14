import { testName } from "./rules/testName";

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
