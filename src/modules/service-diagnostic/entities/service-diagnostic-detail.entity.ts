import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ServiceDiagnostic } from './service-diagnostic.entity';

@Entity()
export class ServiceDiagnosticDetail {
  @Column()
  @PrimaryColumn()
  id: number;

  @Column()
  @PrimaryColumn()
  serviceDiagnosticId: number;

  @ManyToOne(
    () => ServiceDiagnostic,
    (serviceDiagnostic) => serviceDiagnostic.serviceDiagnosticDetail,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'serviceDiagnosticId' })
  serviceDiagnostic: ServiceDiagnostic;

  @Column({ length: 100 })
  description: string;

  @Column({ type: 'text' })
  observation: string;
}
