# AST

## 1+(3+4)*2 BynaryExpression
- 1 Literal "+" operator
- (3+4)*2 BynaryExpression
   - 3+4 BynaryExpression
     - 3 Literal "+" operator  4 Literal 
   - * operator
   - 2 Literal

## console.log("test", "test2") CallExpression
- MemberExpression console.log
  - Identifier console
  - Identifier log
- StringLiteral "test"
- StringLiteral "test2"
