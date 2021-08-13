import { TSESLint } from "@typescript-eslint/experimental-utils";
import { testName } from "../testName";

const tester = new TSESLint.RuleTester({
  parser: require.resolve("espree"),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
});

tester.run("ruleName", testName, {
  valid: [{ code: "1+1" }],
  invalid: [{
    code: "// test",
    errors: [{messageId: "messageId"}]
  }],
});
