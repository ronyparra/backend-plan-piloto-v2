import { PartialType } from '@nestjs/swagger';
import { CreateServiceRequestDto } from './create-service-request.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ServiceRequestDetail } from '../entities/service-request-detail.entity';

export class UpdateServiceRequestDto extends PartialType(
  CreateServiceRequestDto,
) {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  @ApiProperty({ example: 1 })
  customerId: number;

  userId: number;

  @ApiProperty({ type: [ServiceRequestDetail] })
  serviceRequestDetail: ServiceRequestDetail[];
}
