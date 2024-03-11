import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';

import { Purchase } from './purchase.entity';
import { AccountToPay } from './account-to-pay';

@Entity()
export class AccountToPayDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @PrimaryColumn()
  accountToPayId: number;

  @Column()
  @PrimaryColumn()
  purchaseId: number;

  @Column({ type: 'date' })
  due_date: Date;

  @Column({ type: 'float' })
  amount: number;

  @ManyToOne(() => Purchase, (purchase) => purchase.accountToPayDetail, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'purchaseId' })
  purchase: Purchase;

  @ManyToOne(
    () => AccountToPay,
    (accountToPay) => accountToPay.accountToPayDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'accountToPayId' })
  accountToPay: AccountToPay;
}
