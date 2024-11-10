import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { PurchaseBudget } from './purchase-budget.entity';
import { Concept } from 'src/modules/concept/entities/concept.entity';

@Entity()
export class PurchaseBudgetDetail {
  @Column()
  @PrimaryColumn()
  purchaseBudgetId: number;

  @Column()
  @PrimaryColumn()
  conceptId: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'numeric' })
  price: number;

  @ManyToOne(
    () => PurchaseBudget,
    (purchaseBudget) => purchaseBudget.purchaseBudgetDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'purchaseBudgetId' })
  purchaseBudget: PurchaseBudget;

  @ManyToOne(() => Concept, (concept) => concept.purchaseBudgetDetail)
  @JoinColumn({ name: 'conceptId' })
  concept: Concept;
}
