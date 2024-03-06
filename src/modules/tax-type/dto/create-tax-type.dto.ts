import { ApiProperty } from '@nestjs/swagger';

export class CreateTaxTypeDto {
  @ApiProperty({ example: 'Iva 5' })
  name: string;

  @ApiProperty({ example: 5 })
  valueDivider: number;

  @ApiProperty({ example: 5 })
  percentage: number;
}
