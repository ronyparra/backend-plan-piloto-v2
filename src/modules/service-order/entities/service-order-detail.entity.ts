import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ServiceOrder } from './service-order.entity';
import { ServiceType } from 'src/modules/service-type/entities/service-type.entity';

@Entity()
export class ServiceOrderDetail {
  @Column()
  @PrimaryColumn()
  serviceOrderId: number;

  @Column()
  @PrimaryColumn()
  serviceTypeId: number;

  @Column({ length: 10 })
  hourAndMinute: string;

  @ManyToOne(
    () => ServiceOrder,
    (serviceOrder) => serviceOrder.serviceOrderDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'serviceOrderId' })
  serviceOrder: ServiceOrder;

  @ManyToOne(
    () => ServiceType,
    (serviceType) => serviceType.serviceRequestDetail,
  )
  @JoinColumn({ name: 'serviceTypeId' })
  serviceType: ServiceType;
}
