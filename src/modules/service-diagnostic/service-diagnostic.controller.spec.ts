import { Test, TestingModule } from '@nestjs/testing';
import { ServiceDiagnosticController } from './service-diagnostic.controller';
import { ServiceDiagnosticService } from './service-diagnostic.service';

describe('ServiceDiagnosticController', () => {
  let controller: ServiceDiagnosticController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceDiagnosticController],
      providers: [ServiceDiagnosticService],
    }).compile();

    controller = module.get<ServiceDiagnosticController>(ServiceDiagnosticController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
