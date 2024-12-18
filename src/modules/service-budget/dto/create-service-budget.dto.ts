import { ApiProperty } from '@nestjs/swagger';

export class ServiceBudgetRequestDetailDto {
  @ApiProperty({ example: 1 })
  serviceRequestId: number;
}

export class ServiceBudgetDiagnosticDetailDto {
  @ApiProperty({ example: 1 })
  serviceDiagnosticId: number;
}

export class ServiceBudgetDetailDto {
  @ApiProperty({ example: 1 })
  conceptId: number;

  @ApiProperty({ example: 1 })
  quantity: number;

  @ApiProperty({ example: 1 })
  price: number;
}

export class CreateServiceBudgetDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  @ApiProperty({ example: 1 })
  customerId: number;

  @ApiProperty({ example: 1 })
  serviceTypeId: number;

  userId: number;

  @ApiProperty({ type: [ServiceBudgetDetailDto] })
  serviceBudgetDetail: ServiceBudgetDetailDto[];

  @ApiProperty({ type: [ServiceBudgetRequestDetailDto] })
  serviceBudgetRequestDetail: ServiceBudgetRequestDetailDto[];

  @ApiProperty({ type: [ServiceBudgetDiagnosticDetailDto] })
  serviceBudgetDiagnosticDetail: ServiceBudgetDiagnosticDetailDto[];
}
