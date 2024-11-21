import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { SaleRemissionNote } from './sale-remission-note.entity';
import { Concept } from 'src/modules/concept/entities/concept.entity';

@Entity()
export class SaleRemissionNoteDetail {
  @Column()
  @PrimaryColumn()
  saleRemissionNoteId: number;

  @Column()
  @PrimaryColumn()
  conceptId: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'numeric' })
  price: number;

  @ManyToOne(
    () => SaleRemissionNote,
    (saleRemissionNote) => saleRemissionNote.saleRemissionNoteDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'saleRemissionNoteId' })
  saleRemissionNote: SaleRemissionNote;

  @ManyToOne(() => Concept, (concept) => concept.saleRemissionNoteDetail)
  @JoinColumn({ name: 'conceptId' })
  concept: Concept;
}
