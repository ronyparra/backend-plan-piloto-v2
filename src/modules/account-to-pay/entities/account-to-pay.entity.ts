import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

import { User } from 'src/modules/user/entities/user.entity';
import { AccountToPayDetail } from './account-to-pay-detail.entity';
import { Purchase } from 'src/modules/purchase/entities/purchase.entity';

@Entity()
export class AccountToPay {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @ManyToOne(() => Purchase, (purchase) => purchase.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'purchaseId' })
  purchase: Purchase;

  @Column({ name: 'purchaseId' })
  @PrimaryColumn()
  purchaseId: number;

  @OneToMany(
    () => AccountToPayDetail,
    (accountToPayDetail) => accountToPayDetail.accountToPay,
    {
      cascade: true,
    },
  )
  @JoinColumn([
    { name: 'accountToPayId', referencedColumnName: 'id' },
    { name: 'purchaseId', referencedColumnName: 'purchaseId' },
  ])
  accountToPayDetail: AccountToPayDetail[];

  @ManyToOne(() => User, (user) => user.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ name: 'userId' })
  userId: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
