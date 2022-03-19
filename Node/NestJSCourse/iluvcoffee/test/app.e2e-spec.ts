import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    // memo: Nextの実際のアプリケーションを作成する
    app = moduleFixture.createNestApplication();
    // memo: routeやらpipeやらを全てmountする
    await app.init();
  });

  it('/ (GET)', () => {
    // memo: npm packageのsupertestにexpressやらのhttp serverインスタンスを渡してHTTP requestを発行できるようにする
    return request(app.getHttpServer())
      .get('/')
      .set('Authrization', process.env.API_KEY) // memo: for api-key.guard.ts
      .expect(200)
      .expect('Hello World!');
  });

  afterAll(async () => {
    // memo: database connectionなどの全てのアプリに関するコネクションをクローズする
    await app.close();
  });
});
