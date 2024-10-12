import { ApiProperty } from '@nestjs/swagger';
import { ServiceBudgetDetail } from '../entities/service-budget-detail.entity';

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

  @ApiProperty({ type: [ServiceBudgetDetail] })
  serviceBudgetDetail: ServiceBudgetDetail[];
}
