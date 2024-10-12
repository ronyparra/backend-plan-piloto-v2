import { ApiProperty } from '@nestjs/swagger';
import { ServiceDiagnosticDetail } from '../entities/service-diagnostic-detail.entity';

export class CreateServiceDiagnosticDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  @ApiProperty({ example: 1 })
  customerId: number;

  userId: number;

  @ApiProperty({ type: [ServiceDiagnosticDetail] })
  serviceDiagnosticDetail: ServiceDiagnosticDetail[];
}
