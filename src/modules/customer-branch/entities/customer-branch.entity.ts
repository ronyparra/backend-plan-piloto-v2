import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

import { Customer } from '../../customer/entities/customer.entity';

@Entity()
export class CustomerBranch {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn()
  @OneToOne(() => Customer, (customer) => customer.id, { cascade: true })
  customerId: Customer;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
