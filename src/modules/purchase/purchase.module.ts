import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Purchase } from './entities/purchase.entity';
import { PurchaseConcept } from './entities/purchase-concept.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Purchase, PurchaseConcept])],
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule {}
