import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { DebitNotePurchase } from './debit-note-purchase.entity';
import { Concept } from 'src/modules/concept/entities/concept.entity';

@Entity()
export class DebitNotePurchaseDetail {
  @Column()
  @PrimaryColumn()
  debitNotePurchaseId: number;

  @Column()
  @PrimaryColumn()
  conceptId: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'numeric' })
  price: number;

  @ManyToOne(
    () => DebitNotePurchase,
    (debitNotePurchase) => debitNotePurchase.debitNotePurchaseDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'debitNotePurchaseId' })
  debitNotePurchase: DebitNotePurchase;

  @ManyToOne(() => Concept, (concept) => concept.debitNotePurchaseDetail)
  @JoinColumn({ name: 'conceptId' })
  concept: Concept;
}
