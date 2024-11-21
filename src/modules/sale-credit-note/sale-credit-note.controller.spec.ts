import { Test, TestingModule } from '@nestjs/testing';
import { SaleCreditNoteController } from './sale-credit-note.controller';
import { SaleCreditNoteService } from './sale-credit-note.service';

describe('SaleCreditNoteController', () => {
  let controller: SaleCreditNoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaleCreditNoteController],
      providers: [SaleCreditNoteService],
    }).compile();

    controller = module.get<SaleCreditNoteController>(SaleCreditNoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
