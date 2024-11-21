import { Test, TestingModule } from '@nestjs/testing';
import { SaleDebitNoteService } from './sale-debit-note.service';

describe('SaleDebitNoteService', () => {
  let service: SaleDebitNoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaleDebitNoteService],
    }).compile();

    service = module.get<SaleDebitNoteService>(SaleDebitNoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
