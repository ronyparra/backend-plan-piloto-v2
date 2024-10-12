import { Test, TestingModule } from '@nestjs/testing';
import { ServicePromotionController } from './service-promotion.controller';
import { ServicePromotionService } from './service-promotion.service';

describe('ServicePromotionController', () => {
  let controller: ServicePromotionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicePromotionController],
      providers: [ServicePromotionService],
    }).compile();

    controller = module.get<ServicePromotionController>(ServicePromotionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
