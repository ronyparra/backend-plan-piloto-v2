import { Test, TestingModule } from '@nestjs/testing';
import { ServiceContractController } from './service-contract.controller';
import { ServiceContractService } from './service-contract.service';

describe('ServiceContractController', () => {
  let controller: ServiceContractController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceContractController],
      providers: [ServiceContractService],
    }).compile();

    controller = module.get<ServiceContractController>(ServiceContractController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
