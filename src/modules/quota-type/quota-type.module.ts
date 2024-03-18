import { Module } from '@nestjs/common';
import { QuotaTypeService } from './quota-type.service';
import { QuotaTypeController } from './quota-type.controller';
import { QuotaType } from './entities/quota-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([QuotaType])],
  controllers: [QuotaTypeController],
  providers: [QuotaTypeService],
})
export class QuotaTypeModule {}
