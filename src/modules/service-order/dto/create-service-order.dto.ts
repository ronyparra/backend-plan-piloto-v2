import { ApiProperty } from '@nestjs/swagger';
import { ServiceOrderDetail } from '../entities/service-order-detail.entity';

export class CreateServiceOrderDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  @ApiProperty({ example: 1 })
  customerId: number;

  userId: number;

  @ApiProperty({ type: [ServiceOrderDetail] })
  serviceOrderDetail: ServiceOrderDetail[];
}
