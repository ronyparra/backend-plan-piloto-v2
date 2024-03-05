import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Sale } from './sale.entity';
import { Taxes } from 'src/interfaces/tax.interface';
import { Concept } from 'src/modules/concept/entities/concept.entity';

@Entity()
export class SaleConcept {
  @Column()
  @PrimaryColumn()
  saleId: number;

  @Column()
  @PrimaryColumn()
  conceptId: number;

  @Column({})
  quantity: number;

  @Column({})
  price: number;

  @Column({ type: 'jsonb', nullable: false })
  taxes: Taxes[];

  @ManyToOne(() => Sale, (sale) => sale.saleConcept, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'saleId' })
  sale: Sale;

  @ManyToOne(() => Concept, (concept) => concept.conceptPurchase)
  @JoinColumn({ name: 'conceptId' })
  concept: Concept;
}
