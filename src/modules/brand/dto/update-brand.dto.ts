import { PartialType } from '@nestjs/swagger';
import { CreateBrandDto } from './create-brand.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @ApiProperty({ example: 'Marca 2' })
  name: string;
}
