import { PartialType } from '@nestjs/swagger';
import { CreateStampingDto } from './create-stamping.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStampingDto extends PartialType(CreateStampingDto) {
  @ApiProperty({ example: 'Punto 2' })
  name: string;

  @ApiProperty({ example: 1 })
  expeditionPointId: number;

  @ApiProperty({ example: 1 })
  establishmentId: number;

  @ApiProperty({ example: '123456789' })
  number: string;
}
