import { Test, TestingModule } from '@nestjs/testing';
import { CreditNotePurchaseService } from './credit-note-purchase.service';

describe('CreditNotePurchaseService', () => {
  let service: CreditNotePurchaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreditNotePurchaseService],
    }).compile();

    service = module.get<CreditNotePurchaseService>(CreditNotePurchaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
