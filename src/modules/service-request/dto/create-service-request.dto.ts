import { ApiProperty } from '@nestjs/swagger';
import { ServiceRequestDetail } from '../entities/service-request-detail.entity';

export class CreateServiceRequestDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  @ApiProperty({ example: 1 })
  customerId: number;

  @ApiProperty({ example: 1 })
  serviceTypeId: number;

  userId: number;

  @ApiProperty({ type: [ServiceRequestDetail] })
  serviceRequestDetail: ServiceRequestDetail[];
}
