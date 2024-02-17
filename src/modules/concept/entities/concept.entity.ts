import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Category } from 'src/modules/category/entities/category.entity';
import { Currency } from 'src/modules/currency/entities/currency.entity';

@Entity()
export class Concept {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  pricing: number;

  @ManyToOne(() => Category, (category) => category.id, { nullable: false })
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @ManyToOne(() => Currency, (currency) => currency.id, { nullable: false })
  @JoinColumn({ name: 'currencyId' })
  currency: Currency;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
