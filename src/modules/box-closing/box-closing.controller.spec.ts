import { Test, TestingModule } from '@nestjs/testing';
import { BoxClosingController } from './box-closing.controller';
import { BoxClosingService } from './box-closing.service';

describe('BoxClosingController', () => {
  let controller: BoxClosingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoxClosingController],
      providers: [BoxClosingService],
    }).compile();

    controller = module.get<BoxClosingController>(BoxClosingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
