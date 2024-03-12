import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Purchase } from './entities/purchase.entity';
import { PurchaseConcept } from './entities/purchase-concept.entity';
import { AccountToPayModule } from '../account-to-pay/account-to-pay.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Purchase, PurchaseConcept]),
    AccountToPayModule,
  ],
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule {}
