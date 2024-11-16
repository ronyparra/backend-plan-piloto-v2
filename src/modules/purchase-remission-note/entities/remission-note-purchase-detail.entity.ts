import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { RemissionNotePurchase } from './remission-note-purchase.entity';
import { Concept } from 'src/modules/concept/entities/concept.entity';

@Entity()
export class RemissionNotePurchaseDetail {
  @Column()
  @PrimaryColumn()
  remissionNotePurchaseId: number;

  @Column()
  @PrimaryColumn()
  conceptId: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'numeric' })
  price: number;

  @ManyToOne(
    () => RemissionNotePurchase,
    (remissionNotePurchase) =>
      remissionNotePurchase.remissionNotePurchaseDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'remissionNotePurchaseId' })
  remissionNotePurchase: RemissionNotePurchase;

  @ManyToOne(() => Concept, (concept) => concept.remissionNotePurchaseDetail)
  @JoinColumn({ name: 'conceptId' })
  concept: Concept;
}
