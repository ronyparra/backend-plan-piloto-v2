import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Currency } from 'src/modules/currency/entities/currency.entity';
import { PurchaseMoneyBoxDetail } from 'src/modules/purchase/entities/purchase-money-box-detail.entity';

@Entity()
export class Strongbox {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'float', default: 0 })
  amount: number;

  @ManyToOne(() => Currency, (currency) => currency.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'currencyId' })
  currency: Currency;

  @OneToMany(
    () => PurchaseMoneyBoxDetail,
    (purchaseMoneyBoxDetail) => purchaseMoneyBoxDetail.strongbox,
  )
  @JoinColumn({ name: 'id' })
  strongboxPurchase: PurchaseMoneyBoxDetail[];

  @Column({ name: 'currencyId' })
  currencyId: number;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
