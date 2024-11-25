import { Test, TestingModule } from '@nestjs/testing';
import { BoxOpeningService } from './box-opening.service';

describe('BoxOpeningService', () => {
  let service: BoxOpeningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoxOpeningService],
    }).compile();

    service = module.get<BoxOpeningService>(BoxOpeningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
