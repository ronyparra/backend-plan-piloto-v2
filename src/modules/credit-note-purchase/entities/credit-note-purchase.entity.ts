import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import { User } from 'src/modules/user/entities/user.entity';
import { Purchase } from 'src/modules/purchase/entities/purchase.entity';
import { Supplier } from 'src/modules/supplier/entities/supplier.entity';
import { CreditNotePurchaseDetail } from './credit-note-purchase-detail.entity';

@Entity()
export class CreditNotePurchase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ length: 100, nullable: true })
  observation: string;

  @Column({ length: 13 })
  timbrado: string;

  @Column({ length: 13 })
  creditNoteNumber: string;

  @ManyToOne(() => User, (user) => user.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ name: 'userId' })
  userId: number;

  @ManyToOne(() => Purchase, (purchase) => purchase.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'purchaseId' })
  purchase: Purchase;

  @Column({ name: 'purchaseId' })
  purchaseId: number;

  @ManyToOne(() => Supplier, (supplier) => supplier.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'supplierId' })
  supplier: Supplier;

  @Column({ name: 'supplierId' })
  supplierId: number;

  @OneToMany(
    () => CreditNotePurchaseDetail,
    (creditNotePurchaseDetail) => creditNotePurchaseDetail.creditNotePurchase,
    {
      cascade: true,
    },
  )
  creditNotePurchaseDetail: CreditNotePurchaseDetail[];

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
