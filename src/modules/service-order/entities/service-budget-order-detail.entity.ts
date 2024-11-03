import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { ServiceOrder } from 'src/modules/service-order/entities/service-order.entity';
import { ServiceBudget } from '../../service-budget/entities/service-budget.entity';

@Entity()
export class ServiceBudgetOrderDetail {
  @Column()
  @PrimaryColumn()
  serviceBudgetId: number;

  @Column()
  @PrimaryColumn()
  serviceOrderId: number;

  @ManyToOne(
    () => ServiceBudget,
    (serviceBudget) => serviceBudget.serviceBudgetOrderDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'serviceBudgetId' })
  serviceBudget: ServiceBudget;

  @ManyToOne(
    () => ServiceOrder,
    (serviceOrder) => serviceOrder.serviceBudgetOrderDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'serviceOrderId' })
  serviceOrder: ServiceOrder;
}
