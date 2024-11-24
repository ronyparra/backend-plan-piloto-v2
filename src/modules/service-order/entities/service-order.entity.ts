import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import { Customer } from 'src/modules/customer/entities/customer.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { ServiceOrderDetail } from './service-order-detail.entity';
import { ServiceBudgetOrderDetail } from './service-budget-order-detail.entity';
import { ServiceType } from 'src/modules/service-type/entities/service-type.entity';
import { ServiceProvided } from 'src/modules/service-provided/entities/service-provided.entity';

@Entity()
export class ServiceOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ length: 100, nullable: true })
  observation: string;

  @ManyToOne(() => Customer, (customer) => customer.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'customerId' })
  customer: Customer;

  @Column({ name: 'customerId' })
  customerId: number;

  @ManyToOne(() => ServiceType, (serviceType) => serviceType.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  serviceType: ServiceType;

  @Column({ name: 'serviceTypeId' })
  serviceTypeId: number;

  @ManyToOne(() => User, (user) => user.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ name: 'userId' })
  userId: number;

  @OneToMany(
    () => ServiceProvided,
    (serviceProvided) => serviceProvided.serviceOrder,
    {
      nullable: false,
    },
  )
  serviceProvided: ServiceProvided[];

  @OneToMany(
    () => ServiceOrderDetail,
    (serviceOrderDetail) => serviceOrderDetail.serviceOrder,
    {
      cascade: true,
    },
  )
  serviceOrderDetail: ServiceOrderDetail[];

  @OneToMany(
    () => ServiceBudgetOrderDetail,
    (serviceBudgetOrderDetail) => serviceBudgetOrderDetail.serviceOrder,
    {
      cascade: true,
    },
  )
  serviceBudgetOrderDetail: ServiceBudgetOrderDetail[];

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
