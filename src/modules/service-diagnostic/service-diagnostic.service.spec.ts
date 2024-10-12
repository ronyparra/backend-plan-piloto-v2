import { Test, TestingModule } from '@nestjs/testing';
import { ServiceDiagnosticService } from './service-diagnostic.service';

describe('ServiceDiagnosticService', () => {
  let service: ServiceDiagnosticService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceDiagnosticService],
    }).compile();

    service = module.get<ServiceDiagnosticService>(ServiceDiagnosticService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
