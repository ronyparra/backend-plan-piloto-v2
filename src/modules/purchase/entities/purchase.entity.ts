import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import { Supplier } from 'src/modules/supplier/entities/supplier.entity';
import { InvoiceType } from 'src/modules/invoice-type/entities/invoice-type.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { PurchaseDetail } from './purchase-detail.entity';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ length: 100 })
  invoice_number: string;

  @Column({ length: 100 })
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

  @ManyToOne(() => User, (user) => user.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ name: 'userId' })
  userId: number;

  @OneToMany(
    () => PurchaseDetail,
    (purchaseDetail) => purchaseDetail.purchaseId,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'id' })
  purchaseDetail: PurchaseDetail[];

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
