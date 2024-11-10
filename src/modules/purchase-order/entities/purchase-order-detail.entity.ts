import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { PurchaseOrder } from './purchase-order.entity';
import { Concept } from 'src/modules/concept/entities/concept.entity';

@Entity()
export class PurchaseOrderDetail {
  @Column()
  @PrimaryColumn()
  purchaseOrderId: number;

  @Column()
  @PrimaryColumn()
  conceptId: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'numeric' })
  price: number;

  @ManyToOne(
    () => PurchaseOrder,
    (purchaseOrder) => purchaseOrder.purchaseOrderDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'purchaseOrderId' })
  purchaseOrder: PurchaseOrder;

  @ManyToOne(() => Concept, (concept) => concept.purchaseOrderDetail)
  @JoinColumn({ name: 'conceptId' })
  concept: Concept;
}
