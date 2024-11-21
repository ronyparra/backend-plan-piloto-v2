import { Test, TestingModule } from '@nestjs/testing';
import { SaleRemissionNoteService } from './sale-remission-note.service';

describe('SaleRemissionNoteService', () => {
  let service: SaleRemissionNoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaleRemissionNoteService],
    }).compile();

    service = module.get<SaleRemissionNoteService>(SaleRemissionNoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
