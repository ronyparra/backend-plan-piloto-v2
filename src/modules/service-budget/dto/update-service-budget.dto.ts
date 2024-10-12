import { PartialType } from '@nestjs/swagger';
import { CreateServiceBudgetDto } from './create-service-budget.dto';

export class UpdateServiceBudgetDto extends PartialType(
  CreateServiceBudgetDto,
) {}
