import { Test, TestingModule } from '@nestjs/testing';
import { SaleDebitNoteController } from './sale-debit-note.controller';
import { SaleDebitNoteService } from './sale-debit-note.service';

describe('SaleDebitNoteController', () => {
  let controller: SaleDebitNoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaleDebitNoteController],
      providers: [SaleDebitNoteService],
    }).compile();

    controller = module.get<SaleDebitNoteController>(SaleDebitNoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
