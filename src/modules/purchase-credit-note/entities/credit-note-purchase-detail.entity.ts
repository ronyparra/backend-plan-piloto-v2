import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { CreditNotePurchase } from './credit-note-purchase.entity';
import { Concept } from 'src/modules/concept/entities/concept.entity';

@Entity()
export class CreditNotePurchaseDetail {
  @Column()
  @PrimaryColumn()
  creditNotePurchaseId: number;

  @Column()
  @PrimaryColumn()
  conceptId: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'numeric' })
  price: number;

  @ManyToOne(
    () => CreditNotePurchase,
    (creditNotePurchase) => creditNotePurchase.creditNotePurchaseDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'creditNotePurchaseId' })
  creditNotePurchase: CreditNotePurchase;

  @ManyToOne(() => Concept, (concept) => concept.creditNotePurchaseDetail)
  @JoinColumn({ name: 'conceptId' })
  concept: Concept;
}
