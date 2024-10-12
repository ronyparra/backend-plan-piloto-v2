import { Test, TestingModule } from '@nestjs/testing';
import { ServiceDiscountController } from './service-discount.controller';
import { ServiceDiscountService } from './service-discount.service';

describe('ServiceDiscountController', () => {
  let controller: ServiceDiscountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceDiscountController],
      providers: [ServiceDiscountService],
    }).compile();

    controller = module.get<ServiceDiscountController>(ServiceDiscountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
