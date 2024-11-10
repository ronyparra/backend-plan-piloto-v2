import { Test, TestingModule } from '@nestjs/testing';
import { CreditNotePurchaseController } from './credit-note-purchase.controller';
import { CreditNotePurchaseService } from './credit-note-purchase.service';

describe('CreditNotePurchaseController', () => {
  let controller: CreditNotePurchaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreditNotePurchaseController],
      providers: [CreditNotePurchaseService],
    }).compile();

    controller = module.get<CreditNotePurchaseController>(CreditNotePurchaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
