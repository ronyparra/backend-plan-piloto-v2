import { ApiProperty } from '@nestjs/swagger';
import { SaleConcept } from '../entities/sale-concept.entity';

export class SalePedidoSale {
  @ApiProperty()
  saleId: number;

  @ApiProperty()
  salePedidoId: number;
}

export class CreateSaleDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 1 })
  invoice_number: number;

  @ApiProperty({ example: '123456789' })
  observation: string;

  @ApiProperty({ example: 1 })
  stampingId: number;

  @ApiProperty({ example: 1 })
  invoiceTypeId: number;

  @ApiProperty({ example: 1 })
  customerId: number;

  userId: number;

  @ApiProperty({ type: [SaleConcept] })
  saleConcept: SaleConcept[];

  @ApiProperty({ type: [SalePedidoSale] })
  salePedidoSale: SalePedidoSale[];
}
