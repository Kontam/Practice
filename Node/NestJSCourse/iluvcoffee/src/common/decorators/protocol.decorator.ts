import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// memo: ParamDecoratorはコントローラーのメソッドに渡るパラメーターを追加したりする時に使える
// memo: 第一引数は@Protocol('xxx')としたときのxxxが渡ってくる？
export const Protocol = createParamDecorator(
  (defaultValue: string, ctx: ExecutionContext) => {
    console.log({ defaultValue });
    const request = ctx.switchToHttp().getRequest();
    return request.protocol;
  },
);
