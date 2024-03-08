import { Module } from '@nestjs/common';
import { ServiceOrderService } from './service-order.service';
import { ServiceOrderController } from './service-order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceOrder } from './entities/service-order.entity';
import { ServiceOrderDetail } from './entities/service-order-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceOrder, ServiceOrderDetail])],
  controllers: [ServiceOrderController],
  providers: [ServiceOrderService],
})
export class ServiceOrderModule {}
