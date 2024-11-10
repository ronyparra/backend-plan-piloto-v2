import { Test, TestingModule } from '@nestjs/testing';
import { PurchasePedidoService } from './purchase-pedido.service';

describe('PurchasePedidoService', () => {
  let service: PurchasePedidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchasePedidoService],
    }).compile();

    service = module.get<PurchasePedidoService>(PurchasePedidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
