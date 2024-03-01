import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { Concept } from 'src/modules/concept/entities/concept.entity';
import { Purchase } from './purchase.entity';

@Entity()
export class PurchaseDetail {
  @ManyToOne(() => Purchase, (purchase) => purchase.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'purchaseId' })
  purchase: Purchase;

  @PrimaryColumn({ name: 'purchaseId' })
  purchaseId: number;

  @ManyToOne(() => Concept, (concept) => concept.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'conceptId' })
  concept: Concept;

  @PrimaryColumn({ name: 'conceptId' })
  conceptId: number;

  @Column({ type: 'decimal' })
  quantity: number;

  @Column({ type: 'decimal' })
  price: number;
}
