import { Test, TestingModule } from '@nestjs/testing';
import { StrongboxService } from './strongbox.service';

describe('StrongboxService', () => {
  let service: StrongboxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StrongboxService],
    }).compile();

    service = module.get<StrongboxService>(StrongboxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
