import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { ServiceRequest } from 'src/modules/service-request/entities/service-request.entity';
import { ServiceBudget } from './service-budget.entity';

@Entity()
export class ServiceBudgetRequestDetail {
  @Column()
  @PrimaryColumn()
  serviceBudgetId: number;

  @Column()
  @PrimaryColumn()
  serviceRequestId: number;

  @ManyToOne(
    () => ServiceBudget,
    (serviceBudget) => serviceBudget.serviceBudgetRequestDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'serviceBudgetId' })
  serviceBudget: ServiceBudget;

  @ManyToOne(
    () => ServiceRequest,
    (serviceRequest) => serviceRequest.serviceBudgetRequestDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'serviceRequestId' })
  serviceRequest: ServiceRequest;
}
