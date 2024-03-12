import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Purchase } from './entities/purchase.entity';
import { PurchaseConcept } from './entities/purchase-concept.entity';
import { AccountToPay } from './entities/account-to-pay';
import { AccountToPayDetail } from './entities/account-to-pay-detail';
import { AccountToPayService } from './account-to-pay.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Purchase,
      PurchaseConcept,
      AccountToPay,
      AccountToPayDetail,
    ]),
  ],
  controllers: [PurchaseController],
  providers: [PurchaseService, AccountToPayService],
})
export class PurchaseModule {}
