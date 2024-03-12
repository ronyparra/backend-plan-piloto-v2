import { Module } from '@nestjs/common';
import { AccountToPayService } from './account-to-pay.service';
import { AccountToPayController } from './account-to-pay.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountToPay } from './entities/account-to-pay.entity';
import { AccountToPayDetail } from './entities/account-to-pay-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountToPay, AccountToPayDetail])],
  controllers: [AccountToPayController],
  providers: [AccountToPayService],
  exports: [AccountToPayService],
})
export class AccountToPayModule {}
