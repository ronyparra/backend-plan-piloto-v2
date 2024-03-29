import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Purchase } from './purchase.entity';
import { Concept } from 'src/modules/concept/entities/concept.entity';
import { Taxes } from 'src/interfaces/tax.interface';

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

  @Column({ type: 'jsonb', nullable: false })
  taxes: Taxes[];

  @ManyToOne(() => Purchase, (purchase) => purchase.purchaseConcept, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'purchaseId' })
  purchase: Purchase;

  @ManyToOne(() => Concept, (concept) => concept.conceptPurchase)
  @JoinColumn({ name: 'conceptId' })
  concept: Concept;
}
