import { Module } from '@nestjs/common';
import { ServicePromotionService } from './service-promotion.service';
import { ServicePromotionController } from './service-promotion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicePromotion } from './entities/service-promotion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServicePromotion])],
  controllers: [ServicePromotionController],
  providers: [ServicePromotionService],
})
export class ServicePromotionModule {}
