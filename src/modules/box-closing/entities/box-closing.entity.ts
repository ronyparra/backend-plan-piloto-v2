import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { BoxOpening } from 'src/modules/box-opening/entities/box-opening.entity';
import { User } from 'src/modules/user/entities/user.entity';

@Entity()
export class BoxClosing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  date: Date;

  @ManyToOne(() => BoxOpening, (boxOpening) => boxOpening.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  boxOpening: BoxOpening;

  @Column({ name: 'boxOpeningId' })
  boxOpeningId: number;

  @ManyToOne(() => User, (user) => user.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  user: User;

  @Column({ name: 'userId' })
  userId: number;

  @Column({ type: 'numeric' })
  amount: number;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
