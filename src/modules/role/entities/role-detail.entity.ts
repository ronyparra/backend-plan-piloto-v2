import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { Role } from './role.entity';
import { Permission } from 'src/modules/permission/entities/permission.entity';

@Entity()
export class RoleDetail {
  @Column()
  @PrimaryColumn()
  roleId: number;

  @Column()
  @PrimaryColumn()
  permissionId: number;

  @ManyToOne(() => Role, (role) => role.roleDetail, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'roleId' })
  role: Role;

  @ManyToOne(() => Permission, (permission) => permission.permissionRole)
  @JoinColumn({ name: 'permissionId' })
  permission: Permission;
}
