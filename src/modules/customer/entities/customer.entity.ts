import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { CustomerBranch } from 'src/modules/customer-branch/entities/customer-branch.entity';
@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  rut: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @ManyToOne(() => CustomerBranch, (customerBranch) => customerBranch.id, {
    nullable: false,
  })
  @JoinColumn({ name: 'id' })
  customerBranch: CustomerBranch[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
