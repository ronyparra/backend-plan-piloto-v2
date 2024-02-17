import { PartialType } from '@nestjs/swagger';
import { CreateCategoryDto } from './create-category.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @ApiProperty({ example: 'Categoría 1' })
  name: string;
}
