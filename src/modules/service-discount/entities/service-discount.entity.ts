import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ServiceDiscount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'numeric' })
  discountPercentage: number;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
