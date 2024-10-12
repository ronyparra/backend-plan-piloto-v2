import { Module } from '@nestjs/common';
import { ServiceDiscountService } from './service-discount.service';
import { ServiceDiscountController } from './service-discount.controller';
import { ServiceDiscount } from './entities/service-discount.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceDiscount])],
  controllers: [ServiceDiscountController],
  providers: [ServiceDiscountService],
})
export class ServiceDiscountModule {}
