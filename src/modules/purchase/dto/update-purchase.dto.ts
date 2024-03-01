import { PartialType } from '@nestjs/swagger';
import { CreatePurchaseDto } from './create-purchase.dto';
import { ApiProperty } from '@nestjs/swagger';
import { CreatePurchaseDetailDto } from './create-purchase-detail.dto';

export class UpdatePurchaseDto extends PartialType(CreatePurchaseDto) {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: '123456789' })
  invoice_number: string;

  @ApiProperty({ example: '123456789' })
  observation: string;

  @ApiProperty({ example: '123456789' })
  stamping: string;

  @ApiProperty({ example: 1 })
  invoiceTypeId: number;

  @ApiProperty({ example: 1 })
  supplierId: number;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ type: [CreatePurchaseDetailDto] })
  purchaseDetail: CreatePurchaseDetailDto[];
}
