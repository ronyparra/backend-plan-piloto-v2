import { PartialType } from '@nestjs/swagger';
import { CreateIvaDto } from './create-iva.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateIvaDto extends PartialType(CreateIvaDto) {
  @ApiProperty({ example: 'Iva 10' })
  name: string;

  @ApiProperty({ example: 10 })
  value: number;
}
