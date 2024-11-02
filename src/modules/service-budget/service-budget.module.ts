import { Module } from '@nestjs/common';
import { ServiceBudgetService } from './service-budget.service';
import { ServiceBudgetController } from './service-budget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceBudget } from './entities/service-budget.entity';
import { ServiceBudgetDetail } from './entities/service-budget-detail.entity';
import { ServiceBudgetDiagnosticDetail } from './entities/service-budget-diagnostic-detail.entity';
import { ServiceBudgetRequestDetail } from './entities/service-budget-request-detail.entity';
import { ServiceBudgetOrderDetail } from '../service-order/entities/service-budget-order-detail.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ServiceBudget,
      ServiceBudgetDetail,
      ServiceBudgetDiagnosticDetail,
      ServiceBudgetRequestDetail,
      ServiceBudgetOrderDetail,
    ]),
  ],
  controllers: [ServiceBudgetController],
  providers: [ServiceBudgetService],
})
export class ServiceBudgetModule {}
