import { Test, TestingModule } from '@nestjs/testing';
import { BoxOpeningController } from './box-opening.controller';
import { BoxOpeningService } from './box-opening.service';

describe('BoxOpeningController', () => {
  let controller: BoxOpeningController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoxOpeningController],
      providers: [BoxOpeningService],
    }).compile();

    controller = module.get<BoxOpeningController>(BoxOpeningController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
