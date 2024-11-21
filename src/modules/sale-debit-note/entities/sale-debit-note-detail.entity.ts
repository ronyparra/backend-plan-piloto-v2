import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { SaleDebitNote } from './sale-debit-note.entity';
import { Concept } from 'src/modules/concept/entities/concept.entity';

@Entity()
export class SaleDebitNoteDetail {
  @Column()
  @PrimaryColumn()
  saleDebitNoteId: number;

  @Column()
  @PrimaryColumn()
  conceptId: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'numeric' })
  price: number;

  @ManyToOne(
    () => SaleDebitNote,
    (saleDebitNote) => saleDebitNote.saleDebitNoteDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'saleDebitNoteId' })
  saleDebitNote: SaleDebitNote;

  @ManyToOne(() => Concept, (concept) => concept.saleDebitNoteDetail)
  @JoinColumn({ name: 'conceptId' })
  concept: Concept;
}
