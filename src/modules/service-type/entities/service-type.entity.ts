import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { ServiceRequestDetail } from 'src/modules/service-request/entities/service-request-detail.entity';
@Entity()
export class ServiceType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @OneToMany(
    () => ServiceRequestDetail,
    (serviceRequestDetail) => serviceRequestDetail.serviceType,
    {
      cascade: true,
    },
  )
  @JoinColumn({ name: 'id' })
  serviceRequestDetail: ServiceRequestDetail[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
