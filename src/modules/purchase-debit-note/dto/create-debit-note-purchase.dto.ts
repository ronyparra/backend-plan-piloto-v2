import { ApiProperty } from '@nestjs/swagger';

export class DebitNotePurchaseDetailDto {
  @ApiProperty({ example: 1 })
  conceptId: number;

  @ApiProperty({ example: 1 })
  quantity: number;

  @ApiProperty({ example: 1 })
  price: number;
}

export class CreateDebitNotePurchaseDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  @ApiProperty({ example: '1234567890123' })
  timbrado: string;

  @ApiProperty({ example: '1234567890123' })
  debitNoteNumber: string;

  userId: number;

  @ApiProperty({ example: 1 })
  purchaseId: number;

  @ApiProperty({ example: 1 })
  supplierId: number;

  @ApiProperty({ type: [DebitNotePurchaseDetailDto] })
  debitNotePurchaseDetail: DebitNotePurchaseDetailDto[];
}
