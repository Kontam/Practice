import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(['name', 'type']) // memo: 複数カラムの場合のインデックス指定
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Index() // memo: DBのインデックス
  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}
