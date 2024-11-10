import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { PurchasePedido } from './purchase-pedido.entity';
import { Concept } from 'src/modules/concept/entities/concept.entity';

@Entity()
export class PurchasePedidoDetail {
  @Column()
  @PrimaryColumn()
  purchasePedidoId: number;

  @Column()
  @PrimaryColumn()
  conceptId: number;

  @Column({ type: 'int' })
  quantity: number;

  @ManyToOne(
    () => PurchasePedido,
    (purchasePedido) => purchasePedido.purchasePedidoDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'purchasePedidoId' })
  purchasePedido: PurchasePedido;

  @ManyToOne(() => Concept, (concept) => concept.purchasePedidoDetail)
  @JoinColumn({ name: 'conceptId' })
  concept: Concept;
}
