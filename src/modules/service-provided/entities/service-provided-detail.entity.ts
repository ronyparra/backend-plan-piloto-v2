import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { ServiceProvided } from './service-provided.entity';
import { Concept } from 'src/modules/concept/entities/concept.entity';

@Entity()
export class ServiceProvidedDetail {
  @Column()
  @PrimaryColumn()
  serviceProvidedId: number;

  @Column()
  @PrimaryColumn()
  conceptId: number;

  @Column({ type: 'int' })
  quantity: number;

  @ManyToOne(
    () => ServiceProvided,
    (serviceProvided) => serviceProvided.serviceProvidedDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'serviceProvidedId' })
  serviceProvided: ServiceProvided;

  @ManyToOne(() => Concept, (concept) => concept.serviceProvidedDetail)
  @JoinColumn({ name: 'conceptId' })
  concept: Concept;

  @Column({ type: 'numeric' })
  price: number;
}
