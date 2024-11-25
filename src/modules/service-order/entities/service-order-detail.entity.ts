import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ServiceOrder } from './service-order.entity';
import { Concept } from 'src/modules/concept/entities/concept.entity';

@Entity()
export class ServiceOrderDetail {
  @Column()
  @PrimaryColumn()
  serviceOrderId: number;

  @Column()
  @PrimaryColumn()
  conceptId: number;

  @Column({ type: 'int' })
  quantity: number;

  @ManyToOne(
    () => ServiceOrder,
    (serviceOrder) => serviceOrder.serviceOrderDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'serviceOrderId' })
  serviceOrder: ServiceOrder;

  @ManyToOne(() => Concept, (concept) => concept.serviceOrderDetail)
  @JoinColumn({ name: 'conceptId' })
  concept: Concept;

  @Column({ type: 'numeric' })
  price: number;
}
