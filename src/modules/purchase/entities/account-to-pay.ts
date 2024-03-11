import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Supplier } from 'src/modules/supplier/entities/supplier.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { AccountToPayDetail } from './account-to-pay-detail';

@Entity()
export class AccountToPay {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Supplier, (supplier) => supplier.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'supplierId' })
  supplier: Supplier;

  @Column({ name: 'supplierId' })
  supplierId: number;

  @OneToMany(
    () => AccountToPayDetail,
    (accountToPayDetail) => accountToPayDetail.accountToPay,
    {
      cascade: true,
    },
  )
  @JoinColumn({ name: 'id' })
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
