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
import { ServiceDiagnosticDetail } from './service-diagnostic-detail.entity';
import { ServiceBudgetDiagnosticDetail } from 'src/modules/service-budget/entities/service-budget-diagnostic-detail.entity';

@Entity()
export class ServiceDiagnostic {
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

  @OneToMany(
    () => ServiceDiagnosticDetail,
    (serviceDiagnosticDetail) => serviceDiagnosticDetail.serviceDiagnostic,
  )
  serviceDiagnosticDetail: ServiceDiagnosticDetail[];

  @OneToMany(
    () => ServiceBudgetDiagnosticDetail,
    (serviceBudgetDiagnosticDetail) =>
      serviceBudgetDiagnosticDetail.serviceDiagnostic,
  )
  serviceBudgetDiagnosticDetail: ServiceBudgetDiagnosticDetail[];

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
