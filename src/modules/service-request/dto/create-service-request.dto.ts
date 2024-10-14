import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceRequestDetailDto {
  @ApiProperty({ example: 1 })
  conceptId: number;

  @ApiProperty({ example: 1 })
  quantity: number;
}

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

  @ApiProperty({ type: [CreateServiceRequestDetailDto] })
  serviceRequestDetail: CreateServiceRequestDetailDto[];
}
