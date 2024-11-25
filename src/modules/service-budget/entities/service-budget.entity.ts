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
import { ServiceBudgetDetail } from './service-budget-detail.entity';
import { ServiceBudgetDiagnosticDetail } from './service-budget-diagnostic-detail.entity';
import { ServiceBudgetRequestDetail } from './service-budget-request-detail.entity';
import { ServiceBudgetOrderDetail } from 'src/modules/service-order/entities/service-budget-order-detail.entity';
import { ServiceContract } from 'src/modules/service-contract/entities/service-contract.entity';

@Entity()
export class ServiceBudget {
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

  @OneToMany(
    () => ServiceContract,
    (serviceContract) => serviceContract.serviceBudget,
    {
      nullable: true,
    },
  )
  serviceContract: ServiceContract[];

  @ManyToOne(() => User, (user) => user.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ name: 'userId' })
  userId: number;

  @OneToMany(
    () => ServiceBudgetDetail,
    (serviceBudgetDetail) => serviceBudgetDetail.serviceBudget,
    {
      cascade: true,
    },
  )
  serviceBudgetDetail: ServiceBudgetDetail[];

  @OneToMany(
    () => ServiceBudgetDiagnosticDetail,
    (servicebudgetDiagnosticDetail) =>
      servicebudgetDiagnosticDetail.serviceBudget,
    {
      cascade: true,
    },
  )
  serviceBudgetDiagnosticDetail: ServiceBudgetDiagnosticDetail[];

  @OneToMany(
    () => ServiceBudgetRequestDetail,
    (serviceBudgetRequestDetail) => serviceBudgetRequestDetail.serviceBudget,
    {
      cascade: true,
    },
  )
  serviceBudgetRequestDetail: ServiceBudgetRequestDetail[];

  @OneToMany(
    () => ServiceBudgetOrderDetail,
    (serviceBudgetOrderDetail) => serviceBudgetOrderDetail.serviceBudget,
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
