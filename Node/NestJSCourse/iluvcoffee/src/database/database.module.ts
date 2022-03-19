import { DynamicModule, Module } from '@nestjs/common';
import { ConnectionOptions, createConnection } from 'typeorm';

@Module({})
export class DatabaseModule {
  // memo: optionsにはportなどのcreateConnectionのoptionが来ることを想定している
  // provide: DatabaseModule.register({//options//}) のような使い方でDatabaseとの接続に柔軟性が持たせられる
  static register(options: ConnectionOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'CONNECTION',
          useValue: createConnection(options),
        },
      ],
    };
  }
}
