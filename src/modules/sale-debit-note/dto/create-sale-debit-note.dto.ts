import { ApiProperty } from '@nestjs/swagger';

export class CreateSaleDebitNoteDetailDto {
  @ApiProperty({ example: 1 })
  saleDebitNoteId: number;

  @ApiProperty({ example: 1 })
  conceptId: number;

  @ApiProperty({ example: 1 })
  quantity: number;

  @ApiProperty({ example: 1 })
  price: number;
}

export class CreateSaleDebitNoteDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  @ApiProperty({ example: 1 })
  customerId: number;

  @ApiProperty({ example: 1 })
  debit_note_number: number;

  @ApiProperty({ example: 1 })
  stampingId: number;

  @ApiProperty({ example: 1 })
  saleId: number;

  userId: number;

  @ApiProperty({ type: [CreateSaleDebitNoteDetailDto] })
  saleDebitNoteDetail: CreateSaleDebitNoteDetailDto[];
}
