import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Customer } from 'src/modules/customer/entities/customer.entity';
import { InvoiceType } from 'src/modules/invoice-type/entities/invoice-type.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { SaleConcept } from './sale-concept.entity';
import { Stamping } from 'src/modules/stamping/entities/stamping.entity';
import { SalePedidoSale } from './sale-pedido-sale.entity';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column()
  invoice_number: number;

  @Column({ length: 100, nullable: true })
  observation: string;

  @ManyToOne(() => Stamping, (stamping) => stamping.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'stampingId' })
  stamping: Stamping;

  @Column({ name: 'stampingId' })
  stampingId: number;

  @ManyToOne(() => InvoiceType, (invoiceType) => invoiceType.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'invoiceTypeId' })
  invoiceType: InvoiceType;

  @Column({ name: 'invoiceTypeId' })
  invoiceTypeId: number;

  @ManyToOne(() => Customer, (customer) => customer.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'customerId' })
  customer: Customer;

  @Column({ name: 'customerId' })
  customerId: number;

  @OneToMany(() => SalePedidoSale, (salePedidoSale) => salePedidoSale.sale, {
    cascade: true,
  })
  salePedidoSale: SalePedidoSale[];

  @ManyToOne(() => User, (user) => user.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ name: 'userId' })
  userId: number;

  @OneToMany(() => SaleConcept, (saleConcept) => saleConcept.sale, {
    cascade: true,
  })
  @JoinColumn({ name: 'id' })
  saleConcept: SaleConcept[];

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
