import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Supplier } from 'src/modules/supplier/entities/supplier.entity';
import { InvoiceType } from 'src/modules/invoice-type/entities/invoice-type.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { PurchaseConcept } from './purchase-concept.entity';
import { PurchaseMoneyBoxDetail } from 'src/modules/purchase/entities/purchase-money-box-detail.entity';
import { PurchaseOrder } from 'src/modules/purchase-order/entities/purchase-order.entity';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ length: 100 })
  invoice_number: string;

  @Column({ length: 100, nullable: true })
  observation: string;

  @Column({ length: 100 })
  stamping: string;

  @ManyToOne(() => InvoiceType, (invoiceType) => invoiceType.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'invoiceTypeId' })
  invoiceType: InvoiceType;

  @Column({ name: 'invoiceTypeId' })
  invoiceTypeId: number;

  @ManyToOne(() => Supplier, (supplier) => supplier.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'supplierId' })
  supplier: Supplier;

  @Column({ name: 'supplierId' })
  supplierId: number;

  @ManyToOne(() => PurchaseOrder, (purchaseOrder) => purchaseOrder.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'purchaseOrderId' })
  purchaseOrder: PurchaseOrder;

  @Column({ name: 'purchaseOrderId' })
  purchaseOrderId: number;

  @ManyToOne(() => User, (user) => user.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ name: 'userId' })
  userId: number;

  @OneToMany(
    () => PurchaseConcept,
    (purchaseConcept) => purchaseConcept.purchase,
    {
      cascade: true,
    },
  )
  @JoinColumn({ name: 'id' })
  purchaseConcept: PurchaseConcept[];

  @OneToMany(
    () => PurchaseMoneyBoxDetail,
    (purchaseMoneyBoxDetail) => purchaseMoneyBoxDetail.purchase,
    {
      cascade: true,
    },
  )
  @JoinColumn({ name: 'id' })
  purchaseMoneyBoxDetail: PurchaseMoneyBoxDetail[];

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
