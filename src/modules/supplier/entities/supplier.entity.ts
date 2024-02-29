import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { City } from 'src/modules/city/entities/city.entity';
import { District } from 'src/modules/district/entities/district.entity';

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  social_reason: string;

  @Column({ length: 100 })
  document: string;

  @Column({ length: 100 })
  address: string;

  @Column({ length: 100 })
  phone: string;

  @Column({ length: 100 })
  email: string;

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

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
