import { testName } from "./testName";

export = {
  rules: {
    "ruleName": testName,
  },
  configs: {
    all: {
      plugins: ["plugin-name"],
      rules: {
        "ruleName": "error",
      }
    },
  },
};
