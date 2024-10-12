import { Test, TestingModule } from '@nestjs/testing';
import { ServiceProvidedController } from './service-provided.controller';
import { ServiceProvidedService } from './service-provided.service';

describe('ServiceProvidedController', () => {
  let controller: ServiceProvidedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceProvidedController],
      providers: [ServiceProvidedService],
    }).compile();

    controller = module.get<ServiceProvidedController>(ServiceProvidedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
