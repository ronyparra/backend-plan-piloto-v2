import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Category } from 'src/modules/category/entities/category.entity';
import { Currency } from 'src/modules/currency/entities/currency.entity';
import { TaxType } from 'src/modules/tax-type/entities/tax-type.entity';

@Entity()
export class Concept {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  pricing: number;

  @ManyToOne(() => TaxType, (taxType) => taxType.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'taxTypeId' })
  taxType: TaxType;

  @Column({ name: 'taxTypeId' })
  taxTypeId: number;

  @ManyToOne(() => Category, (category) => category.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @Column({ name: 'categoryId' })
  categoryId: number;

  @ManyToOne(() => Currency, (currency) => currency.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'currencyId' })
  currency: Currency;

  @Column({ name: 'currencyId' })
  currencyId: number;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
