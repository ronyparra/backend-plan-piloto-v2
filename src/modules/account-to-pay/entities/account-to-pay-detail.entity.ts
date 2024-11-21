import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';

import { AccountToPay } from './account-to-pay.entity';

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

  @Column({ type: Boolean, default: false })
  paid: boolean;

  @ManyToOne(
    () => AccountToPay,
    (accountToPay) => accountToPay.accountToPayDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'accountToPayId', referencedColumnName: 'id' },
    { name: 'purchaseId', referencedColumnName: 'purchaseId' },
  ])
  accountToPay: AccountToPay;
}
