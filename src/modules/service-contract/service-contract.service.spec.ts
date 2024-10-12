import { Test, TestingModule } from '@nestjs/testing';
import { ServiceContractService } from './service-contract.service';

describe('ServiceContractService', () => {
  let service: ServiceContractService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceContractService],
    }).compile();

    service = module.get<ServiceContractService>(ServiceContractService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
