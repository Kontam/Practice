import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';
import { WrapResponseInterceptor } from './common/interceptors/wrap-response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // memo: DTOに定義されていないpropertyを自動的に削除する
      forbidNonWhitelisted: true, // memo: DTOに無いpropertyはErrorにする
      transform: true, // memo: TSの型を見て、リクエストbody, queryを自動的に変換する オリジナルのClassにすらできる
      transformOptions: {
        // memo: @Type decoratorで明示指定する必要がなくなる
        enableImplicitConversion: true,
      },
    }),
  );
  app.useGlobalInterceptors(
    new WrapResponseInterceptor(),
    new TimeoutInterceptor(),
  );

  const options = new DocumentBuilder()
    .setTitle('Iluvcoffee')
    .setDescription('Coffee application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  // memo: swagger-uiのためのエンドポイント設定。/apiにアクセスするとこのアプリのエンドポイントのAPI情報が全て見られる
  SwaggerModule.setup('api', app, document);

  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
