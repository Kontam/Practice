import {TSESLint} from '@typescript-eslint/experimental-utils';

//export const testName: TSESLint.RuleModule<'messageId', []> = {
export const testName: any = {
  /*
  meta: {
    messages: {messageId: '1'},
    type: "problem",
    //schema: "schema",
  } as any,
 */
  create: context => {
    return {
      BinaryExpression: node => {
        context.report({ node, message: 'messageId' });
      },
      Comment: node => {
        context.report({
          node,
          messageId: 'messageId',
        });
      },
    };
  },
};
