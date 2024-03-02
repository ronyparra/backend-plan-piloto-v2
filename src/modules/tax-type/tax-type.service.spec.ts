import { Test, TestingModule } from '@nestjs/testing';
import { TaxTypeService } from './tax-type.service';

describe('TaxTypeService', () => {
  let service: TaxTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxTypeService],
    }).compile();

    service = module.get<TaxTypeService>(TaxTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
