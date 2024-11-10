import { PartialType } from '@nestjs/swagger';
import { CreatePurchaseBudgetDto } from './create-purchase-budget.dto';

export class UpdatePurchaseBudgetDto extends PartialType(CreatePurchaseBudgetDto) {}
