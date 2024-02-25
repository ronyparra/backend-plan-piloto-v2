import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { PaymentStatus } from 'src/modules/payment-status/entities/payment-status.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { CustomerBranch } from 'src/modules/customer-branch/entities/customer-branch.entity';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @ManyToOne(() => PaymentStatus, (paymentStatus) => paymentStatus.id, {
    nullable: false,
  })
  @JoinColumn({ name: 'paymentStatusId' })
  paymentStatus: PaymentStatus;

  @ManyToOne(() => User, (user) => user.id, { nullable: false })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => CustomerBranch, (customerBranch) => customerBranch.id, {
    nullable: false,
  })
  @JoinColumn({ name: 'customerBranchId' })
  customerBranch: CustomerBranch;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
