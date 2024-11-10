import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseBudgetController } from './purchase-budget.controller';
import { PurchaseBudgetService } from './purchase-budget.service';

describe('PurchaseBudgetController', () => {
  let controller: PurchaseBudgetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseBudgetController],
      providers: [PurchaseBudgetService],
    }).compile();

    controller = module.get<PurchaseBudgetController>(PurchaseBudgetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
