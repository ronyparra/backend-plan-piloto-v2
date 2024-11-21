import { Test, TestingModule } from '@nestjs/testing';
import { SalePedidoController } from './sale-pedido.controller';
import { SalePedidoService } from './sale-pedido.service';

describe('SalePedidoController', () => {
  let controller: SalePedidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalePedidoController],
      providers: [SalePedidoService],
    }).compile();

    controller = module.get<SalePedidoController>(SalePedidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
