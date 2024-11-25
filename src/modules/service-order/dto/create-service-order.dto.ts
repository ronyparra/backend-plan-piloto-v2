import { ApiProperty } from '@nestjs/swagger';

export class ServiceBudgetOrderDetailDto {
  @ApiProperty({ example: 1 })
  serviceBudgetId: number;

  @ApiProperty({ example: 1 })
  serviceOrderId: number;
}

export class ServiceOrderDetailDto {
  @ApiProperty({ example: 1 })
  conceptId: number;

  @ApiProperty({ example: 1 })
  quantity: number;

  @ApiProperty({ example: 1 })
  price: number;
}

export class CreateServiceOrderDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  @ApiProperty({ example: 1 })
  customerId: number;

  @ApiProperty({ example: 1 })
  serviceTypeId: number;

  userId: number;

  @ApiProperty({ type: [ServiceOrderDetailDto] })
  serviceOrderDetail: ServiceOrderDetailDto[];

  @ApiProperty({ type: [ServiceBudgetOrderDetailDto] })
  serviceBudgetOrderDetail: ServiceBudgetOrderDetailDto[];
}
