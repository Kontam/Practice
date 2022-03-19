import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.time('Request-response time');
    // memo: middlewareはpipeなどを含めた全てのNestJSプロセスより最初に呼ばれる
    // memo: 特定のメソッドなどに紐づけることができないがパスには紐づく
    console.log('Hi from middleware');

    res.on('finish', () => console.timeEnd('Request-response time'));
    next();
  }
}
