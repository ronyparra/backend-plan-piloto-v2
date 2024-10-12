import { Test, TestingModule } from '@nestjs/testing';
import { ServiceBudgetService } from './service-budget.service';

describe('ServiceBudgetService', () => {
  let service: ServiceBudgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceBudgetService],
    }).compile();

    service = module.get<ServiceBudgetService>(ServiceBudgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
