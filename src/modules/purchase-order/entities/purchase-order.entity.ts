import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import { Supplier } from 'src/modules/supplier/entities/supplier.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { PurchaseBudget } from 'src/modules/purchase-budget/entities/purchase-budget.entity';
import { PurchaseOrderDetail } from './purchase-order-detail.entity';

@Entity()
export class PurchaseOrder {
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

  @ManyToOne(() => Supplier, (supplier) => supplier.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'supplierId' })
  supplier: Supplier;

  @Column({ name: 'supplierId' })
  supplierId: number;

  @ManyToOne(() => PurchaseBudget, (purchaseBudget) => purchaseBudget.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'purchaseBudgetId' })
  purchaseBudget: PurchaseBudget;

  @Column({ name: 'purchaseBudgetId' })
  purchaseBudgetId: number;

  @OneToMany(
    () => PurchaseOrderDetail,
    (purchaseOrderDetail) => purchaseOrderDetail.purchaseOrder,
    {
      cascade: true,
    },
  )
  purchaseOrderDetail: PurchaseOrderDetail[];

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
