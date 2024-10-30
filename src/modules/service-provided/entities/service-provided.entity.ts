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
import { ServiceType } from 'src/modules/service-type/entities/service-type.entity';
import { ServiceOrder } from 'src/modules/service-order/entities/service-order.entity';
import { ServiceProvidedDetail } from './service-provided-detail.entity';
import { ServiceDiscount } from 'src/modules/service-discount/entities/service-discount.entity';

@Entity()
export class ServiceProvided {
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

  @ManyToOne(() => User, (user) => user.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ name: 'userId' })
  userId: number;

  @ManyToOne(() => ServiceType, (serviceType) => serviceType.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'serviceTypeId' })
  serviceType: ServiceType;

  @Column({ name: 'serviceTypeId' })
  serviceTypeId: number;

  @ManyToOne(() => ServiceOrder, (serviceOrder) => serviceOrder.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'serviceOrderId' })
  serviceOrder: ServiceOrder;

  @Column({ name: 'serviceOrderId' })
  serviceOrderId: number;

  @ManyToOne(() => ServiceDiscount, (serviceDiscount) => serviceDiscount.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'serviceDiscountId' })
  serviceDiscount: ServiceDiscount;

  @Column({ name: 'serviceDiscountId' })
  serviceDiscountId: number;

  @OneToMany(
    () => ServiceProvidedDetail,
    (serviceProvidedDetail) => serviceProvidedDetail.serviceProvided,
    {
      cascade: true,
    },
  )
  serviceProvidedDetail: ServiceProvidedDetail[];

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
