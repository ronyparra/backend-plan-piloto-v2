import { Module } from '@nestjs/common';
import { TaxTypeService } from './tax-type.service';
import { TaxTypeController } from './tax-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxType } from './entities/tax-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaxType])],
  controllers: [TaxTypeController],
  providers: [TaxTypeService],
})
export class TaxTypeModule {}
