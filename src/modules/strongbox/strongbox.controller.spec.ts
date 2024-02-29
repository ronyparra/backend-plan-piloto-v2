import { Test, TestingModule } from '@nestjs/testing';
import { StrongboxController } from './strongbox.controller';
import { StrongboxService } from './strongbox.service';

describe('StrongboxController', () => {
  let controller: StrongboxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StrongboxController],
      providers: [StrongboxService],
    }).compile();

    controller = module.get<StrongboxController>(StrongboxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
