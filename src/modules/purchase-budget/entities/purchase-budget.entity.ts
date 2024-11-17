import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import { User } from 'src/modules/user/entities/user.entity';
import { Supplier } from 'src/modules/supplier/entities/supplier.entity';
import { PurchaseBudgetDetail } from './purchase-budget-detail.entity';
import { PurchasePedido } from 'src/modules/purchase-pedido/entities/purchase-pedido.entity';
import { PurchaseOrder } from 'src/modules/purchase-order/entities/purchase-order.entity';

@Entity()
export class PurchaseBudget {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ length: 100, nullable: true })
  observation: string;

  @Column({ length: 100 })
  budget_number: string;

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

  @ManyToOne(() => PurchasePedido, (purchasePedido) => purchasePedido.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'purchasePedidoId' })
  purchasePedido: PurchasePedido;

  @Column({ name: 'purchasePedidoId' })
  purchasePedidoId: number;

  @OneToMany(
    () => PurchaseBudgetDetail,
    (purchaseBudgetDetail) => purchaseBudgetDetail.purchaseBudget,
    {
      cascade: true,
    },
  )
  purchaseBudgetDetail: PurchaseBudgetDetail[];

  @OneToMany(
    () => PurchaseOrder,
    (purchaseOrder) => purchaseOrder.purchaseBudget,
  )
  purchaseOrder: PurchaseOrder[];

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
