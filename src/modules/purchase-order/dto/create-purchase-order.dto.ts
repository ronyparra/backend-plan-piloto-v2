import { ApiProperty } from '@nestjs/swagger';

export class PurchaseOrderDetailDto {
  @ApiProperty({ example: 1 })
  conceptId: number;

  @ApiProperty({ example: 1 })
  quantity: number;

  @ApiProperty({ example: 1 })
  price: number;
}

export class CreatePurchaseOrderDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  userId: number;

  @ApiProperty({ example: 1 })
  supplierId: number;

  @ApiProperty({ example: 1 })
  purchaseBudgetId: number;

  @ApiProperty({ type: [PurchaseOrderDetailDto] })
  purchaseOrderDetail: PurchaseOrderDetailDto[];
}
