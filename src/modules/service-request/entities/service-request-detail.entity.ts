import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ServiceRequest } from './service-request.entity';
import { Concept } from 'src/modules/concept/entities/concept.entity';

@Entity()
export class ServiceRequestDetail {
  @Column()
  @PrimaryColumn()
  serviceRequestId: number;

  @Column()
  @PrimaryColumn()
  conceptId: number;

  @Column({ type: 'int' })
  quantity: number;

  @ManyToOne(
    () => ServiceRequest,
    (serviceRequest) => serviceRequest.serviceRequestDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'serviceRequestId' })
  serviceRequest: ServiceRequest;

  @ManyToOne(() => Concept, (concept) => concept.serviceRequestDetail, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'conceptId' })
  concept: Concept;
}
