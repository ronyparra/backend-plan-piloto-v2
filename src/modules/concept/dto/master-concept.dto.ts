import { ApiProperty } from '@nestjs/swagger';

export class MasterConceptDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Concept 1' })
  name: string;
}
