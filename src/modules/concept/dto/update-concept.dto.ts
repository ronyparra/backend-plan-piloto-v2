import { PartialType } from '@nestjs/swagger';
import { CreateConceptDto } from './create-concept.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateConceptDto extends PartialType(CreateConceptDto) {
  @ApiProperty({ example: 'Concept 1' })
  name: string;

  @ApiProperty({ example: 1 })
  categoryId: number;

  @ApiProperty({ example: 1 })
  currencyId: number;

  @ApiProperty({ example: 100 })
  pricing: number;
}
