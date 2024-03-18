import { Test, TestingModule } from '@nestjs/testing';
import { QuotaTypeController } from './quota-type.controller';
import { QuotaTypeService } from './quota-type.service';

describe('QuotaTypeController', () => {
  let controller: QuotaTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuotaTypeController],
      providers: [QuotaTypeService],
    }).compile();

    controller = module.get<QuotaTypeController>(QuotaTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
