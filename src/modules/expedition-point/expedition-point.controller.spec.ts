import { Test, TestingModule } from '@nestjs/testing';
import { ExpeditionPointController } from './expedition-point.controller';
import { ExpeditionPointService } from './expedition-point.service';

describe('ExpeditionPointController', () => {
  let controller: ExpeditionPointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpeditionPointController],
      providers: [ExpeditionPointService],
    }).compile();

    controller = module.get<ExpeditionPointController>(ExpeditionPointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
