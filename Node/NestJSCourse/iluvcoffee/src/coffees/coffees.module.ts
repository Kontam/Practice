import { Injectable, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import coffeeConfig from './config/coffee.config';

class ConfigService {}
class DevelopmentConfigService {}
class ProductionConfigService {}

@Injectable() // memo: {scope: Scope.DEFAULT}が省略され、Singltonで動く
export class CoffeeBrandsFactory {
  create() {
    /* ... do something ... */
    return ['buddy brew', 'nescafe'];
  }
}

@Module({
  // memo: 根本にはforRoot, 各モジュールにはforFeature
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeeConfig), // memo: featureごとにconfigを定義することができる
  ],
  controllers: [CoffeesController],
  // memo: test用にServiceをMockに差し替える時にはuseValueで実体を他のものに指定できる
  providers: [
    CoffeesService,
    CoffeeBrandsFactory,
    {
      provide: ConfigService,
      useClass:
        process.env.NODE_ENV === 'development'
          ? DevelopmentConfigService
          : ProductionConfigService,
    },
    // meno: 定数の注入。主にTokenなどの文字列を他のファイルから入れる時に使う
    {
      provide: COFFEE_BRANDS,
      // memo: useFactoryはprogramaticalに注入する値、条件を書くことができる
      useFactory: async (connection: Connection): Promise<string[]> => {
        // const coffeeBrands = await connection.query('SELECT * ...');
        const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']); // mock
        return coffeeBrands;
      },
      inject: [Connection],
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
