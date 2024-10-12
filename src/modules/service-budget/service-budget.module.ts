import { Module } from '@nestjs/common';
import { ServiceBudgetService } from './service-budget.service';
import { ServiceBudgetController } from './service-budget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceBudget } from './entities/service-budget.entity';
import { ServiceBudgetDetail } from './entities/service-budget-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceBudget, ServiceBudgetDetail])],
  controllers: [ServiceBudgetController],
  providers: [ServiceBudgetService],
})
export class ServiceBudgetModule {}
