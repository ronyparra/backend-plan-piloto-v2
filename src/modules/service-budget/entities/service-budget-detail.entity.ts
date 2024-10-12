import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Concept } from 'src/modules/concept/entities/concept.entity';
import { ServiceBudget } from './service-budget.entity';

@Entity()
export class ServiceBudgetDetail {
  @Column()
  @PrimaryColumn()
  serviceBudgetId: number;

  @Column()
  @PrimaryColumn()
  conceptId: number;

  @Column({ type: 'int' })
  quantity: number;

  @ManyToOne(
    () => ServiceBudget,
    (serviceBudget) => serviceBudget.serviceBudgetDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'serviceBudgetId' })
  serviceBudget: ServiceBudget;

  @ManyToOne(() => Concept, (concept) => concept.serviceBudgetDetail)
  @JoinColumn({ name: 'conceptId' })
  concept: Concept;

  @Column({ type: 'numeric' })
  price: number;
}
