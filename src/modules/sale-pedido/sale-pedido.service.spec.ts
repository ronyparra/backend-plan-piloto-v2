import { Test, TestingModule } from '@nestjs/testing';
import { SalePedidoService } from './sale-pedido.service';

describe('SalePedidoService', () => {
  let service: SalePedidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalePedidoService],
    }).compile();

    service = module.get<SalePedidoService>(SalePedidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
