import { Test, TestingModule } from '@nestjs/testing';
import { RemissionNotePurchaseService } from './remission-note-purchase.service';

describe('RemissionNotePurchaseService', () => {
  let service: RemissionNotePurchaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemissionNotePurchaseService],
    }).compile();

    service = module.get<RemissionNotePurchaseService>(RemissionNotePurchaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
