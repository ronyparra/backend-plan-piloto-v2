import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseBudgetService } from './purchase-budget.service';

describe('PurchaseBudgetService', () => {
  let service: PurchaseBudgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseBudgetService],
    }).compile();

    service = module.get<PurchaseBudgetService>(PurchaseBudgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
