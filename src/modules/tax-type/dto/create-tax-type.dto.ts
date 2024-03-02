import { ApiProperty } from '@nestjs/swagger';

export class CreateTaxTypeDto {
  @ApiProperty({ example: 'Iva 5' })
  name: string;

  @ApiProperty({ example: 5 })
  value: number;
}
