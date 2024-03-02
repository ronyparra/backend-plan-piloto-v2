import { Test, TestingModule } from '@nestjs/testing';
import { TaxTypeController } from './tax-type.controller';
import { TaxTypeService } from './tax-type.service';

describe('TaxTypeController', () => {
  let controller: TaxTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxTypeController],
      providers: [TaxTypeService],
    }).compile();

    controller = module.get<TaxTypeController>(TaxTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
