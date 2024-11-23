import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { SalePedido } from 'src/modules/sale-pedido/entities/sale-pedido.entity';
import { Sale } from './sale.entity';

@Entity()
export class SalePedidoSale {
  @Column()
  @PrimaryColumn()
  saleId: number;

  @Column()
  @PrimaryColumn()
  salePedidoId: number;

  @ManyToOne(() => Sale, (sale) => sale.salePedidoSale, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'saleId' })
  sale: Sale;

  @ManyToOne(() => SalePedido, (salePedido) => salePedido.salePedidoSale, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'salePedidoId' })
  salePedido: SalePedido;
}
