import { Module } from '@nestjs/common';
import { CreditNotePurchaseService } from './credit-note-purchase.service';
import { CreditNotePurchaseController } from './credit-note-purchase.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditNotePurchase } from './entities/credit-note-purchase.entity';
import { CreditNotePurchaseDetail } from './entities/credit-note-purchase-detail.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CreditNotePurchase, CreditNotePurchaseDetail]),
  ],
  controllers: [CreditNotePurchaseController],
  providers: [CreditNotePurchaseService],
})
export class CreditNotePurchaseModule {}
