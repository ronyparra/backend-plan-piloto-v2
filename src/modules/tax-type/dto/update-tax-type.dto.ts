import { PartialType } from '@nestjs/swagger';
import { CreateTaxTypeDto } from './create-tax-type.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaxTypeDto extends PartialType(CreateTaxTypeDto) {
  @ApiProperty({ example: 'Iva 10' })
  name: string;

  @ApiProperty({ example: 10 })
  valueDivider: number;

  @ApiProperty({ example: 10 })
  percentage: number;
}
