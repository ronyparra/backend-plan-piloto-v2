import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import { User } from 'src/modules/user/entities/user.entity';
import { Sale } from 'src/modules/sale/entities/sale.entity';
import { Customer } from 'src/modules/customer/entities/customer.entity';
import { Stamping } from 'src/modules/stamping/entities/stamping.entity';
import { SaleDebitNoteDetail } from './sale-debit-note-detail.entity';

@Entity()
export class SaleDebitNote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ length: 100, nullable: true })
  observation: string;

  @Column({ type: 'int' })
  debitNoteNumber: number;

  @ManyToOne(() => User, (user) => user.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ name: 'userId' })
  userId: number;

  @ManyToOne(() => Stamping, (stamping) => stamping.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'stampingId' })
  stamping: Stamping;

  @Column({ name: 'stampingId' })
  stampingId: number;

  @ManyToOne(() => Customer, (customer) => customer.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'customerId' })
  customer: Customer;

  @Column({ name: 'customerId' })
  customerId: number;

  @OneToMany(
    () => SaleDebitNoteDetail,
    (saleDebitNoteDetail) => saleDebitNoteDetail.saleDebitNote,
    {
      cascade: true,
    },
  )
  saleDebitNoteDetail: SaleDebitNoteDetail[];

  @ManyToOne(() => Sale, (sale) => sale.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'saleId' })
  sale: Sale;

  @Column({ name: 'saleId' })
  saleId: number;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
