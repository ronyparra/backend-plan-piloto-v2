import { Test, TestingModule } from '@nestjs/testing';
import { ServiceBudgetController } from './service-budget.controller';
import { ServiceBudgetService } from './service-budget.service';

describe('ServiceBudgetController', () => {
  let controller: ServiceBudgetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceBudgetController],
      providers: [ServiceBudgetService],
    }).compile();

    controller = module.get<ServiceBudgetController>(ServiceBudgetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
