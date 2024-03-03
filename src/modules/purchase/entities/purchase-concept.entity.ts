import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Purchase } from './purchase.entity';
import { Concept } from 'src/modules/concept/entities/concept.entity';

@Entity()
export class PurchaseConcept {
  @Column()
  @PrimaryColumn()
  purchaseId: number;

  @Column()
  @PrimaryColumn()
  conceptId: number;

  @Column({})
  quantity: number;

  @Column({})
  price: number;

  @ManyToOne(() => Purchase, (purchase) => purchase.purchaseConcept)
  @JoinColumn({ name: 'purchaseId' })
  purchase: Purchase;

  @ManyToOne(() => Concept, (concept) => concept.conceptPurchase)
  @JoinColumn({ name: 'conceptId' })
  concept: Concept;
}
