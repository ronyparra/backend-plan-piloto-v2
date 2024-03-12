import { Test, TestingModule } from '@nestjs/testing';
import { AccountToPayService } from './account-to-pay.service';

describe('AccountToPayService', () => {
  let service: AccountToPayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountToPayService],
    }).compile();

    service = module.get<AccountToPayService>(AccountToPayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
