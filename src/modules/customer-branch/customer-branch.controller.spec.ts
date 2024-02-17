import { Test, TestingModule } from '@nestjs/testing';
import { CustomerBranchController } from './customer-branch.controller';
import { CustomerBranchService } from './customer-branch.service';

describe('CustomerBranchController', () => {
  let controller: CustomerBranchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerBranchController],
      providers: [CustomerBranchService],
    }).compile();

    controller = module.get<CustomerBranchController>(CustomerBranchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
