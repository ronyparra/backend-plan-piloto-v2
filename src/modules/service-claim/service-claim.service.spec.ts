import { Test, TestingModule } from '@nestjs/testing';
import { ServiceClaimService } from './service-claim.service';

describe('ServiceClaimService', () => {
  let service: ServiceClaimService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceClaimService],
    }).compile();

    service = module.get<ServiceClaimService>(ServiceClaimService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
