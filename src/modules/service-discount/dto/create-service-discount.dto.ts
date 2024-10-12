import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceDiscountDto {
  @ApiProperty({ example: 'Descuento 1' })
  name: string;

  @ApiProperty({ example: 10 })
  discountPercentage: number;
}
