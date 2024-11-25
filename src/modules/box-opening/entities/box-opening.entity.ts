import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { User } from 'src/modules/user/entities/user.entity';
import { Strongbox } from 'src/modules/strongbox/entities/strongbox.entity';

@Entity()
export class BoxOpening {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  date: Date;

  @ManyToOne(() => User, (user) => user.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  user: User;

  @ManyToOne(() => Strongbox, (strongbox) => strongbox.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  strongbox: Strongbox;

  @Column({ name: 'userId' })
  userId: number;

  @Column({ name: 'strongboxId' })
  strongboxId: number;

  @Column({ type: 'numeric' })
  amount: number;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
