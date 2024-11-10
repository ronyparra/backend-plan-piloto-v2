import { Module } from '@nestjs/common';
import { PurchasePedidoService } from './purchase-pedido.service';
import { PurchasePedidoController } from './purchase-pedido.controller';

@Module({
  controllers: [PurchasePedidoController],
  providers: [PurchasePedidoService],
})
export class PurchasePedidoModule {}
