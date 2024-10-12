import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { ServiceBudget } from './service-budget.entity';
import { ServiceDiagnostic } from 'src/modules/service-diagnostic/entities/service-diagnostic.entity';

@Entity()
export class ServicebudgetDiagnosticDetail {
  @Column()
  @PrimaryColumn()
  serviceBudgetId: number;

  @Column()
  @PrimaryColumn()
  serviceDiagnosticId: number;

  @ManyToOne(
    () => ServiceBudget,
    (serviceBudget) => serviceBudget.serviceBudgetDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'serviceBudgetId' })
  serviceBudget: ServiceBudget;

  @ManyToOne(
    () => ServiceDiagnostic,
    (serviceDiagnostic) => serviceDiagnostic.serviceDiagnosticDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'serviceDiagnosticId' })
  serviceDiagnostic: ServiceDiagnostic;
}
