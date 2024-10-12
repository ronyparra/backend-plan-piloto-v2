import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ServiceContract } from './service-contract.entity';

@Entity()
export class ServiceContractClausule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @PrimaryColumn()
  serviceContractId: number;

  @ManyToOne(
    () => ServiceContract,
    (serviceContract) => serviceContract.serviceContractClausule,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'serviceContractId' })
  serviceContract: ServiceContract;

  @Column({ length: 100 })
  description: string;

  @Column({ type: 'text' })
  observation: string;
}
