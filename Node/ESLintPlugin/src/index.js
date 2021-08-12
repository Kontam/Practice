"use strict";
var testName_1 = require("./testName");
module.exports = {
    rules: {
        "ruleName": testName_1.testName,
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
