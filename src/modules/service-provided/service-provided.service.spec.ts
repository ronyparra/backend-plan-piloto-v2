import { Test, TestingModule } from '@nestjs/testing';
import { ServiceProvidedService } from './service-provided.service';

describe('ServiceProvidedService', () => {
  let service: ServiceProvidedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceProvidedService],
    }).compile();

    service = module.get<ServiceProvidedService>(ServiceProvidedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
