import { PartialType } from '@nestjs/swagger';
import { CreateServiceOrderDto } from './create-service-order.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ServiceOrderDetail } from '../entities/service-order-detail.entity';

export class UpdateServiceOrderDto extends PartialType(CreateServiceOrderDto) {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  @ApiProperty({ example: 1 })
  customerId: number;

  @ApiProperty({ example: 1 })
  serviceTypeId: number;

  userId: number;

  @ApiProperty({ type: [ServiceOrderDetail] })
  serviceOrderDetail: ServiceOrderDetail[];
}
