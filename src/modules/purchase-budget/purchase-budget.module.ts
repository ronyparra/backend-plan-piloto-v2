import { Module } from '@nestjs/common';
import { PurchaseBudgetService } from './purchase-budget.service';
import { PurchaseBudgetController } from './purchase-budget.controller';

@Module({
  controllers: [PurchaseBudgetController],
  providers: [PurchaseBudgetService],
})
export class PurchaseBudgetModule {}
