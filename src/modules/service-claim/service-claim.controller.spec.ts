import { Test, TestingModule } from '@nestjs/testing';
import { ServiceClaimController } from './service-claim.controller';
import { ServiceClaimService } from './service-claim.service';

describe('ServiceClaimController', () => {
  let controller: ServiceClaimController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceClaimController],
      providers: [ServiceClaimService],
    }).compile();

    controller = module.get<ServiceClaimController>(ServiceClaimController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
