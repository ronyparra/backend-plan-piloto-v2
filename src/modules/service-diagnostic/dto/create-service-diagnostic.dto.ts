import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceBudgetDetailDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Description' })
  description: string;

  @ApiProperty({ example: 'Observation' })
  observation: string;
}

export class CreateServiceDiagnosticDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  @ApiProperty({ example: 1 })
  customerId: number;

  userId: number;

  @ApiProperty({ type: [CreateServiceBudgetDetailDto] })
  serviceDiagnosticDetail: CreateServiceBudgetDetailDto[];
}
