import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import { User } from 'src/modules/user/entities/user.entity';
import { Customer } from 'src/modules/customer/entities/customer.entity';
import { SalePedidoDetail } from './sale-pedido-detail.entity';
import { SalePedidoSale } from 'src/modules/sale/entities/sale-pedido-sale.entity';

@Entity()
export class SalePedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ length: 100, nullable: true })
  observation: string;

  @Column({ length: 100 })
  salePedidoNumber: string;

  @ManyToOne(() => User, (user) => user.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ name: 'userId' })
  userId: number;

  @ManyToOne(() => Customer, (customer) => customer.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'customerId' })
  customer: Customer;

  @Column({ name: 'customerId' })
  customerId: number;

  @OneToMany(
    () => SalePedidoSale,
    (salePedidoSale) => salePedidoSale.salePedido,
    {
      cascade: true,
    },
  )
  salePedidoSale: SalePedidoSale[];

  @OneToMany(
    () => SalePedidoDetail,
    (salePedidoDetail) => salePedidoDetail.salePedido,
    {
      cascade: true,
    },
  )
  salePedidoDetail: SalePedidoDetail[];

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
