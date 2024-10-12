import { Test, TestingModule } from '@nestjs/testing';
import { ServiceDiscountService } from './service-discount.service';

describe('ServiceDiscountService', () => {
  let service: ServiceDiscountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceDiscountService],
    }).compile();

    service = module.get<ServiceDiscountService>(ServiceDiscountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
