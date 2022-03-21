import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class WrapResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    // memo: dataはResponseのDataそのもの
    // memo: InterceptorはObservableを返却する
    return next.handle().pipe(
      map((data) => ({
        data,
      })),
    );
  }
}