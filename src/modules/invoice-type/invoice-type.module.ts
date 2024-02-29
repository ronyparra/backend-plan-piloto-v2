import { Module } from '@nestjs/common';
import { InvoiceTypeService } from './invoice-type.service';
import { InvoiceTypeController } from './invoice-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceType } from './entities/invoice-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceType])],
  controllers: [InvoiceTypeController],
  providers: [InvoiceTypeService],
})
export class InvoiceTypeModule {}
