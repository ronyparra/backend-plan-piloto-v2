import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { SalePedido } from './sale-pedido.entity';
import { Concept } from 'src/modules/concept/entities/concept.entity';

@Entity()
export class SalePedidoDetail {
  @Column()
  @PrimaryColumn()
  salePedidoId: number;

  @Column()
  @PrimaryColumn()
  conceptId: number;

  @Column({ type: 'int' })
  quantity: number;

  @ManyToOne(() => SalePedido, (salePedido) => salePedido.salePedidoDetail, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'salePedidoId' })
  salePedido: SalePedido;

  @ManyToOne(() => Concept, (concept) => concept.salePedidoDetail)
  @JoinColumn({ name: 'conceptId' })
  concept: Concept;
}
