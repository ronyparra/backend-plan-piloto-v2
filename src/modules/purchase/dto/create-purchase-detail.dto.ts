import { ApiProperty } from '@nestjs/swagger';

export class CreatePurchaseDetailDto {
  @ApiProperty({ example: 1 })
  purchaseId: number;

  @ApiProperty({ example: 1 })
  conceptId: number;

  @ApiProperty({ example: 1 })
  quantity: number;

  @ApiProperty({ example: 1 })
  price: number;
}
