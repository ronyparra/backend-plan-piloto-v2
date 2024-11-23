import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

import { Role } from 'src/modules/role/entities/role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  username: string;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  lastname: string;

  @ManyToOne(() => Role, (role) => role.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'roleId' })
  role: Role;

  @Column({ name: 'roleId' })
  roleId: number;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @BeforeUpdate()
  async hashPasswordUpdate() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
