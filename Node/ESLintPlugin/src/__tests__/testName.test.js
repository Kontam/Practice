"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var experimental_utils_1 = require("@typescript-eslint/experimental-utils");
var testName_1 = require("../testName");
var tester = new experimental_utils_1.TSESLint.RuleTester({
    parser: require.resolve("espree"),
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
});
tester.run("ruleName", testName_1.testName, {
    valid: [{ code: "1+1" }],
    invalid: [{
            code: "// test",
            errors: [{ messageId: "messageId" }]
        }],
});
