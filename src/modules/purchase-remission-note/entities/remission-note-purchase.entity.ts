import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import { User } from 'src/modules/user/entities/user.entity';
import { RemissionNotePurchaseDetail } from './remission-note-purchase-detail.entity';
import { Supplier } from 'src/modules/supplier/entities/supplier.entity';
import { Purchase } from 'src/modules/purchase/entities/purchase.entity';

@Entity()
export class RemissionNotePurchase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ length: 100, nullable: true })
  observation: string;

  @ManyToOne(() => User, (user) => user.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ name: 'userId' })
  userId: number;

  @Column({ length: 13 })
  timbrado: string;

  @Column({ length: 20 })
  remissionNoteNumber: string;

  @ManyToOne(() => Supplier, (supplier) => supplier.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'supplierId' })
  supplier: Supplier;

  @Column({ name: 'supplierId' })
  supplierId: number;

  @ManyToOne(() => Purchase, (purchase) => purchase.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'purchaseId' })
  purchase: Purchase;

  @Column({ name: 'purchaseId' })
  purchaseId: number;

  @OneToMany(
    () => RemissionNotePurchaseDetail,
    (remissionNotePurchaseDetail) =>
      remissionNotePurchaseDetail.remissionNotePurchase,
    {
      cascade: true,
    },
  )
  remissionNotePurchaseDetail: RemissionNotePurchaseDetail[];

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
