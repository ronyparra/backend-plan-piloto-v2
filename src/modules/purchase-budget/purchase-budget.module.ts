import { Module } from '@nestjs/common';
import { PurchaseBudgetService } from './purchase-budget.service';
import { PurchaseBudgetController } from './purchase-budget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseBudget } from './entities/purchase-budget.entity';
import { PurchaseBudgetDetail } from './entities/purchase-budget-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseBudget, PurchaseBudgetDetail])],
  controllers: [PurchaseBudgetController],
  providers: [PurchaseBudgetService],
})
export class PurchaseBudgetModule {}
