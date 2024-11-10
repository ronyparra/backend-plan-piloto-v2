import { Test, TestingModule } from '@nestjs/testing';
import { DebitNotePurchaseService } from './debit-note-purchase.service';

describe('DebitNotePurchaseService', () => {
  let service: DebitNotePurchaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DebitNotePurchaseService],
    }).compile();

    service = module.get<DebitNotePurchaseService>(DebitNotePurchaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
