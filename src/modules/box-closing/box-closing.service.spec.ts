import { Test, TestingModule } from '@nestjs/testing';
import { BoxClosingService } from './box-closing.service';

describe('BoxClosingService', () => {
  let service: BoxClosingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoxClosingService],
    }).compile();

    service = module.get<BoxClosingService>(BoxClosingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
