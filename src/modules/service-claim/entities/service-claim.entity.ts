import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ServiceContract } from 'src/modules/service-contract/entities/service-contract.entity';

@Entity()
export class ServiceClaim {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serviceContractId: number;

  @ManyToOne(() => ServiceContract, (serviceContract) => serviceContract.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'serviceContractId' })
  serviceContract: ServiceContract;

  @Column({ length: 100 })
  description: string;

  @Column({ type: 'text' })
  observation: string;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
