import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import { ServiceBudget } from 'src/modules/service-budget/entities/service-budget.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Customer } from 'src/modules/customer/entities/customer.entity';
import { ServiceContractClausule } from './service-contract-clausule.entity';

@Entity()
export class ServiceContract {
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

  @ManyToOne(() => ServiceBudget, (serviceBudget) => serviceBudget.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'serviceBudgetId' })
  serviceBudget: ServiceBudget;

  @Column({ name: 'serviceBudgetId' })
  serviceBudgetId: number;

  @OneToMany(
    () => ServiceContractClausule,
    (serviceContractClausule) => serviceContractClausule.serviceContract,
    {
      cascade: true,
    },
  )
  serviceContractClausule: ServiceContractClausule[];

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
