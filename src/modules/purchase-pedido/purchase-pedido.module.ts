import { Module } from '@nestjs/common';
import { PurchasePedidoService } from './purchase-pedido.service';
import { PurchasePedidoController } from './purchase-pedido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchasePedido } from './entities/purchase-pedido.entity';
import { PurchasePedidoDetail } from './entities/purchase-pedido-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PurchasePedido, PurchasePedidoDetail])],
  controllers: [PurchasePedidoController],
  providers: [PurchasePedidoService],
})
export class PurchasePedidoModule {}
