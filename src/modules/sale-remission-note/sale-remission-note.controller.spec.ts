import { Test, TestingModule } from '@nestjs/testing';
import { SaleRemissionNoteController } from './sale-remission-note.controller';
import { SaleRemissionNoteService } from './sale-remission-note.service';

describe('SaleRemissionNoteController', () => {
  let controller: SaleRemissionNoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaleRemissionNoteController],
      providers: [SaleRemissionNoteService],
    }).compile();

    controller = module.get<SaleRemissionNoteController>(SaleRemissionNoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
