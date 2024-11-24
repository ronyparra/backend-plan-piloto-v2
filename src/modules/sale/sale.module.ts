import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { Sale } from './entities/sale.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleConcept } from './entities/sale-concept.entity';
import { InvoiceReport } from './invoice.report';
import { SalePedidoSale } from './entities/sale-pedido-sale.entity';
import { SaleServiceProvided } from './entities/sale-service-provided';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Sale,
      SaleConcept,
      SalePedidoSale,
      SaleServiceProvided,
    ]),
  ],
  controllers: [SaleController],
  providers: [SaleService, InvoiceReport],
})
export class SaleModule {}
