import { Test, TestingModule } from '@nestjs/testing';
import { PurchasePedidoController } from './purchase-pedido.controller';
import { PurchasePedidoService } from './purchase-pedido.service';

describe('PurchasePedidoController', () => {
  let controller: PurchasePedidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchasePedidoController],
      providers: [PurchasePedidoService],
    }).compile();

    controller = module.get<PurchasePedidoController>(PurchasePedidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
