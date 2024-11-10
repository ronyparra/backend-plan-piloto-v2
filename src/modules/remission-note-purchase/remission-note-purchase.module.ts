import { Module } from '@nestjs/common';
import { RemissionNotePurchaseService } from './remission-note-purchase.service';
import { RemissionNotePurchaseController } from './remission-note-purchase.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RemissionNotePurchase } from './entities/remission-note-purchase.entity';
import { RemissionNotePurchaseDetail } from './entities/remission-note-purchase-detail.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RemissionNotePurchase,
      RemissionNotePurchaseDetail,
    ]),
  ],
  controllers: [RemissionNotePurchaseController],
  providers: [RemissionNotePurchaseService],
})
export class RemissionNotePurchaseModule {}
