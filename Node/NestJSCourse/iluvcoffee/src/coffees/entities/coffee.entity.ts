import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

// memo: 引数なしなら小文字になる。引数ありならその名前でEntityテーブルが作られる
@Entity() // sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn() // memo: 主キーであり、自動で値を生成する
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  // memo: Arrayの値をjsonとして保持する
  // memo: nullableが指定されていないColumnはrequired
  @JoinTable()
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, { cascade: true })
  flavors: Flavor[];
}
