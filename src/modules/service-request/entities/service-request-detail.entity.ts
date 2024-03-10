import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ServiceRequest } from './service-request.entity';
import { ServiceType } from 'src/modules/service-type/entities/service-type.entity';

@Entity()
export class ServiceRequestDetail {
  @Column()
  @PrimaryColumn()
  serviceRequestId: number;

  @Column()
  @PrimaryColumn()
  serviceTypeId: number;

  @Column({ length: 10 })
  hourAndMinute: string;

  @ManyToOne(
    () => ServiceRequest,
    (serviceRequest) => serviceRequest.serviceRequestDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'serviceRequestId' })
  serviceRequest: ServiceRequest;

  @ManyToOne(
    () => ServiceType,
    (serviceType) => serviceType.serviceRequestDetail,
  )
  @JoinColumn({ name: 'serviceTypeId' })
  serviceType: ServiceType;
}
