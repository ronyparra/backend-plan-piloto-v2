import { Module } from '@nestjs/common';
import { SalePedidoService } from './sale-pedido.service';
import { SalePedidoController } from './sale-pedido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalePedido } from './entities/sale-pedido.entity';
import { SalePedidoDetail } from './entities/sale-pedido-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalePedido, SalePedidoDetail])],
  controllers: [SalePedidoController],
  providers: [SalePedidoService],
})
export class SalePedidoModule {}
