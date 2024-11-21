import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { SaleCreditNote } from './sale-credit-note.entity';
import { Concept } from 'src/modules/concept/entities/concept.entity';

@Entity()
export class SaleCreditNoteDetail {
  @Column()
  @PrimaryColumn()
  saleCreditNoteId: number;

  @Column()
  @PrimaryColumn()
  conceptId: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'numeric' })
  price: number;

  @ManyToOne(
    () => SaleCreditNote,
    (saleCreditNote) => saleCreditNote.saleCreditNoteDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'saleCreditNoteId' })
  saleCreditNote: SaleCreditNote;

  @ManyToOne(() => Concept, (concept) => concept.saleCreditNoteDetail)
  @JoinColumn({ name: 'conceptId' })
  concept: Concept;
}
