import { Test, TestingModule } from '@nestjs/testing';
import { ExpeditionPointService } from './expedition-point.service';

describe('ExpeditionPointService', () => {
  let service: ExpeditionPointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpeditionPointService],
    }).compile();

    service = module.get<ExpeditionPointService>(ExpeditionPointService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
