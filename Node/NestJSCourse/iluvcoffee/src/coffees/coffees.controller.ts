import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Res,
  SetMetadata,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Protocol } from '../common/decorators/protocol.decorator';
import { Public } from '../common/decorators/public.decorator';
import { PaginationQueryDto } from '../common/pagination-query.dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

// memo: Globalに宣言せずにControllerだけで使うケース インスタンスでもいいがメモリを使うのでカスタマイズしないならクラス
@UsePipes(ValidationPipe)
// memo: routingに使う文字列らしい /coffees
@Controller('coffees')
@ApiTags('coffees') // memo: swagger-uiを整理する
export class CoffeesController {
  // memo: dependancyの注入にはconstructorを使用する
  constructor(private readonly coffeesService: CoffeesService) {}
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  // memo: swagger-uiにエラー情報が記載される このデコレーターは403のもの
  @Public()
  // memo: @UsePipes(ValidationPipe)とここで宣言すればfindAllのみのスコープのPipe
  // memo: /coffees/flavors nest構造に使う文字列
  @Get()
  // memo: @ResデコレーターはNestがラップしているサーバーサイドNodeライブラリの提供するオブジェクトを返す
  // memo: defaultはexpress.ただしこのアプローチはNestとの依存が薄れる
  async findAll(
    @Protocol('https') protocol: string,
    @Query() paginationQueryDto: PaginationQueryDto,
  ) {
    // const { limit, offset } = paginationQuery;
    console.log(protocol);
    return this.coffeesService.findAll(paginationQueryDto);
  }

  @Get(':id')
  // memo: Paramデコレーターの引数なしの場合、パラメーター全体が取れる。特定の場合は引数あり
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return this.coffeesService.findOne('' + id);
  }

  @Post()
  // memo: Param同様、特定のパラメーターにアクセスしたい場合は引数で名前を指定する
  // memo: Validationを使うときは注意。パラメーター指定ありのものにしかValidationできない
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    return this.coffeesService.create(createCoffeeDto);
    // return `this action creates a coffee;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(ValidationPipe /* param based pipe*/)
    updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
