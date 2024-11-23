import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { RoleDetail } from './role-detail.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @OneToMany(() => RoleDetail, (roleDetail) => roleDetail.role, {
    cascade: true,
  })
  roleDetail: RoleDetail[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
