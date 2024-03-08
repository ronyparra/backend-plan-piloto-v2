import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ServiceRequest } from './service-request.entity';
import { Concept } from 'src/modules/concept/entities/concept.entity';

@Entity()
export class ServiceRequestConcept {
  @Column()
  @PrimaryColumn()
  serviceRequestId: number;

  @Column()
  @PrimaryColumn()
  conceptId: number;

  @ManyToOne(
    () => ServiceRequest,
    (serviceRequest) => serviceRequest.serviceRequestConcept,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'saleId' })
  serviceRequest: ServiceRequest;

  @ManyToOne(() => Concept, (concept) => concept.conceptPurchase)
  @JoinColumn({ name: 'conceptId' })
  concept: Concept;
}
