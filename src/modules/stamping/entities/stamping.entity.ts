import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ExpeditionPoint } from 'src/modules/expedition-point/entities/expedition-point.entity';
import { Establishment } from 'src/modules/establishment/entities/establishment.entity';

@Entity()
export class Stamping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ length: 100 })
  number: string;

  @Column({ type: 'date' })
  start_date: Date;

  @Column({ type: 'date' })
  end_date: Date;

  @ManyToOne(() => ExpeditionPoint, (expeditionPoint) => expeditionPoint.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'expeditionPointId' })
  expeditionPoint: ExpeditionPoint;

  @Column({ name: 'expeditionPointId' })
  expeditionPointId: number;

  @ManyToOne(() => Establishment, (establishment) => establishment.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'establishmentId' })
  establishment: Establishment;

  @Column({ name: 'establishmentId' })
  establishmentId: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
