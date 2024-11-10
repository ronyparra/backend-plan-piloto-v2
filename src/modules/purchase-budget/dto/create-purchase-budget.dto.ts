import { ApiProperty } from '@nestjs/swagger';

export class PurchaseBudgetDetailDto {
  @ApiProperty({ example: 1 })
  conceptId: number;

  @ApiProperty({ example: 1 })
  quantity: number;

  @ApiProperty({ example: 1 })
  price: number;
}

export class CreatePurchaseBudgetDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  userId: number;

  @ApiProperty({ example: 1 })
  supplierId: number;

  @ApiProperty({ example: 1 })
  purchasePedidoId: number;

  @ApiProperty({ type: [PurchaseBudgetDetailDto] })
  purchaseBudgetDetail: PurchaseBudgetDetailDto[];
}
