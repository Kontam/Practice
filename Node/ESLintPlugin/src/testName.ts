import {TSESLint} from '@typescript-eslint/experimental-utils';

export const testName: TSESLint.RuleModule<'messageId', []> = {
  meta: {
    messages: {messageId: '1'},
    type: "problem",
    //schema: "schema",
  } as any,
  create: context => {
    return {
      Comment: node => {
        context.report({
          node,
          messageId: 'messageId',
        });
      },
    };
  },
};
