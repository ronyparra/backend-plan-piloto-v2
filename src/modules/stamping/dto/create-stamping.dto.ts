import { ApiProperty } from '@nestjs/swagger';

export class CreateStampingDto {
  @ApiProperty({ example: 'Punto 1' })
  name: string;

  @ApiProperty({ example: 1 })
  expeditionPointId: number;

  @ApiProperty({ example: 1 })
  establishmentId: number;

  @ApiProperty({ example: '123456789' })
  number: string;
}
