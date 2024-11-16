import { Test, TestingModule } from '@nestjs/testing';
import { RemissionNotePurchaseController } from './remission-note-purchase.controller';
import { RemissionNotePurchaseService } from './remission-note-purchase.service';

describe('RemissionNotePurchaseController', () => {
  let controller: RemissionNotePurchaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemissionNotePurchaseController],
      providers: [RemissionNotePurchaseService],
    }).compile();

    controller = module.get<RemissionNotePurchaseController>(RemissionNotePurchaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
