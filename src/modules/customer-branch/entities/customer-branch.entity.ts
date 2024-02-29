import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Customer } from 'src/modules/customer/entities/customer.entity';
import { City } from 'src/modules/city/entities/city.entity';
import { District } from 'src/modules/district/entities/district.entity';

@Entity()
export class CustomerBranch {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn()
  @ManyToOne(() => Customer, (customer) => customer.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'customerId' })
  customer: Customer;

  @Column({ name: 'customerId' })
  customerId: number;

  @ManyToOne(() => City, (city) => city.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'cityId' })
  city: City;

  @Column({ name: 'cityId' })
  cityId: number;

  @ManyToOne(() => District, (district) => district.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'districtId' })
  district: District;

  @Column({ name: 'districtId' })
  districtId: number;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
