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

  @Column({ type: 'date' })
  due_date: Date;

  @Column({ type: 'float' })
  amount: number;

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
