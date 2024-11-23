import { ApiProperty } from '@nestjs/swagger';

export class CreateSalePedidoDetailDto {
  @ApiProperty({ example: 1 })
  saleId: number;

  @ApiProperty({ example: 1 })
  conceptId: number;

  @ApiProperty({ example: 1 })
  quantity: number;
}

export class CreateSalePedidoDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  @ApiProperty({ example: '001-001-1234567' })
  salePedidoNumber: string;

  @ApiProperty({ example: 1 })
  customerId: number;

  userId: number;

  @ApiProperty({ type: [CreateSalePedidoDetailDto] })
  salePedidoDetail: CreateSalePedidoDetailDto[];
}
