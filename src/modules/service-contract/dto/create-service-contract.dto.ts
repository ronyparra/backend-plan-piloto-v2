import { ApiProperty } from '@nestjs/swagger';

export class ServiceContractDetailDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Description' })
  description: string;

  @ApiProperty({ example: 'Observation' })
  observation: string;
}

export class CreateServiceContractDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  @ApiProperty({ example: 1 })
  customerId: number;

  @ApiProperty({ example: 1 })
  serviceBudgetId: number;

  userId: number;

  @ApiProperty({ type: [ServiceContractDetailDto] })
  serviceContractClausule: ServiceContractDetailDto[];
}
