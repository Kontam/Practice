"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testName = void 0;
exports.testName = {
    meta: {
        messages: { messageId: '1' },
        type: "problem",
        //schema: "schema",
    },
    create: function (context) {
        return {
            Comment: function (node) {
                context.report({
                    node: node,
                    messageId: 'messageId',
                });
            },
        };
    },
};
