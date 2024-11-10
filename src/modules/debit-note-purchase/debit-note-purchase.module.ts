import { Module } from '@nestjs/common';
import { DebitNotePurchaseService } from './debit-note-purchase.service';
import { DebitNotePurchaseController } from './debit-note-purchase.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DebitNotePurchase } from './entities/debit-note-purchase.entity';
import { DebitNotePurchaseDetail } from './entities/debit-note-purchase-detail.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([DebitNotePurchase, DebitNotePurchaseDetail]),
  ],
  controllers: [DebitNotePurchaseController],
  providers: [DebitNotePurchaseService],
})
export class DebitNotePurchaseModule {}
