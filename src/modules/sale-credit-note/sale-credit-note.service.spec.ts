import { Test, TestingModule } from '@nestjs/testing';
import { SaleCreditNoteService } from './sale-credit-note.service';

describe('SaleCreditNoteService', () => {
  let service: SaleCreditNoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaleCreditNoteService],
    }).compile();

    service = module.get<SaleCreditNoteService>(SaleCreditNoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
