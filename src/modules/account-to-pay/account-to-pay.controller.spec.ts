import { Test, TestingModule } from '@nestjs/testing';
import { AccountToPayController } from './account-to-pay.controller';
import { AccountToPayService } from './account-to-pay.service';

describe('AccountToPayController', () => {
  let controller: AccountToPayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountToPayController],
      providers: [AccountToPayService],
    }).compile();

    controller = module.get<AccountToPayController>(AccountToPayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
