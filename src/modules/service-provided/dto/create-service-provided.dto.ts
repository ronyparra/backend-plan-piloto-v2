import { ApiProperty } from '@nestjs/swagger';
import { ServiceProvidedDetail } from '../entities/service-provided-detail.entity';

export class CreateServiceProvidedDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  @ApiProperty({ example: 1 })
  customerId: number;

  @ApiProperty({ example: 1 })
  serviceTypeId: number;

  @ApiProperty({ example: 1 })
  serviceDiscountId: number;

  userId: number;

  @ApiProperty({ type: [ServiceProvidedDetail] })
  serviceProvidedDetail: ServiceProvidedDetail[];
}