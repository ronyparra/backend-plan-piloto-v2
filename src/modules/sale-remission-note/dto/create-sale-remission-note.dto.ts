import { ApiProperty } from '@nestjs/swagger';

export class CreateSaleRemissionNoteDetailDto {
  @ApiProperty({ example: 1 })
  saleRemissionNoteId: number;

  @ApiProperty({ example: 1 })
  conceptId: number;

  @ApiProperty({ example: 1 })
  quantity: number;

  @ApiProperty({ example: 1 })
  price: number;

  taxes: any[];
}

export class CreateSaleRemissionNoteDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  @ApiProperty({ example: 1 })
  customerId: number;

  @ApiProperty({ example: 1 })
  stampingId: number;

  @ApiProperty({ example: 1 })
  saleId: number;

  @ApiProperty({ example: 1 })
  remissionNoteNumber: number;

  userId: number;

  @ApiProperty({ type: [CreateSaleRemissionNoteDetailDto] })
  saleRemissionNoteDetail: CreateSaleRemissionNoteDetailDto[];
}
