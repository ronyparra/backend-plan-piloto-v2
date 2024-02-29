import { Test, TestingModule } from '@nestjs/testing';
import { StampingService } from './stamping.service';

describe('StampingService', () => {
  let service: StampingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StampingService],
    }).compile();

    service = module.get<StampingService>(StampingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
