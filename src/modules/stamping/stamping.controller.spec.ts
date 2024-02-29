import { Test, TestingModule } from '@nestjs/testing';
import { StampingController } from './stamping.controller';
import { StampingService } from './stamping.service';

describe('StampingController', () => {
  let controller: StampingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StampingController],
      providers: [StampingService],
    }).compile();

    controller = module.get<StampingController>(StampingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
