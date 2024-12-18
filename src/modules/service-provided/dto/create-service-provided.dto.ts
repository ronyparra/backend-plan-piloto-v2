import { ApiProperty } from '@nestjs/swagger';

export class ServiceProvidedDetailDto {
  @ApiProperty({ example: 1 })
  conceptId: number;

  @ApiProperty({ example: 1 })
  quantity: number;

  @ApiProperty({ example: 1 })
  price: number;
}

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
  serviceOrderId: number;

  @ApiProperty({ example: 1 })
  serviceDiscountId: number;

  userId: number;

  @ApiProperty({ type: [ServiceProvidedDetailDto] })
  serviceProvidedDetail: ServiceProvidedDetailDto[];
}
