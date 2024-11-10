import { ApiProperty } from '@nestjs/swagger';

export class PurchasePedidoDetailDto {
  @ApiProperty({ example: 1 })
  conceptId: number;

  @ApiProperty({ example: 1 })
  quantity: number;
}

export class CreatePurchasePedidoDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  userId: number;

  @ApiProperty({ type: [PurchasePedidoDetailDto] })
  purchasePedidoDetail: PurchasePedidoDetailDto[];
}
