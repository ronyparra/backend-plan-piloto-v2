import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class TaxType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'float', default: 0 })
  valueDivider: number;

  @Column({ type: 'float', default: 0 })
  percentage: number;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
