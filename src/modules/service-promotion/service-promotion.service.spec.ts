import { Test, TestingModule } from '@nestjs/testing';
import { ServicePromotionService } from './service-promotion.service';

describe('ServicePromotionService', () => {
  let service: ServicePromotionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicePromotionService],
    }).compile();

    service = module.get<ServicePromotionService>(ServicePromotionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
