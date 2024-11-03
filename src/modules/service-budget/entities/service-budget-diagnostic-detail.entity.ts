import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { ServiceBudget } from './service-budget.entity';
import { ServiceDiagnostic } from 'src/modules/service-diagnostic/entities/service-diagnostic.entity';

@Entity()
export class ServiceBudgetDiagnosticDetail {
  @Column()
  @PrimaryColumn()
  serviceBudgetId: number;

  @Column()
  @PrimaryColumn()
  serviceDiagnosticId: number;

  @ManyToOne(
    () => ServiceBudget,
    (serviceBudget) => serviceBudget.serviceBudgetDiagnosticDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'serviceBudgetId' })
  serviceBudget: ServiceBudget;

  @ManyToOne(
    () => ServiceDiagnostic,
    (serviceDiagnostic) => serviceDiagnostic.serviceBudgetDiagnosticDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'serviceDiagnosticId' })
  serviceDiagnostic: ServiceDiagnostic;
}
