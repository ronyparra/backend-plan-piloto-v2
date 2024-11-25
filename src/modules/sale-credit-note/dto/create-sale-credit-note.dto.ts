import { ApiProperty } from '@nestjs/swagger';

export class CreateSaleCreditNoteDetailDto {
  @ApiProperty({ example: 1 })
  saleCreditNoteId: number;

  @ApiProperty({ example: 1 })
  conceptId: number;

  @ApiProperty({ example: 1 })
  quantity: number;

  @ApiProperty({ example: 1 })
  price: number;

  taxes: any[];
}

export class CreateSaleCreditNoteDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  @ApiProperty({ example: 1 })
  customerId: number;

  @ApiProperty({ example: 1 })
  creditNoteNumber: number;

  @ApiProperty({ example: 1 })
  stampingId: number;

  @ApiProperty({ example: 1 })
  saleId: number;

  userId: number;

  @ApiProperty({ type: [CreateSaleCreditNoteDetailDto] })
  saleCreditNoteDetail: CreateSaleCreditNoteDetailDto[];
}
