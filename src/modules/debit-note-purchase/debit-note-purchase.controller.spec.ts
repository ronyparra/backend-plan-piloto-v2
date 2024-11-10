import { Test, TestingModule } from '@nestjs/testing';
import { DebitNotePurchaseController } from './debit-note-purchase.controller';
import { DebitNotePurchaseService } from './debit-note-purchase.service';

describe('DebitNotePurchaseController', () => {
  let controller: DebitNotePurchaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DebitNotePurchaseController],
      providers: [DebitNotePurchaseService],
    }).compile();

    controller = module.get<DebitNotePurchaseController>(DebitNotePurchaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
