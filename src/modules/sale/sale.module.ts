import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { Sale } from './entities/sale.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleConcept } from './entities/sale-concept.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sale, SaleConcept])],
  controllers: [SaleController],
  providers: [SaleService],
})
export class SaleModule {}
