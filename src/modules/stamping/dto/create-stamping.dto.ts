import { ApiProperty } from '@nestjs/swagger';

export class CreateStampingDto {
  @ApiProperty({ example: 'Punto 1' })
  name: string;

  @ApiProperty({ example: 1 })
  expeditionPointId: number;

  @ApiProperty({ example: 1 })
  establishmentId: number;

  @ApiProperty({ example: '2021-01-01' })
  start_date: Date;

  @ApiProperty({ example: '2021-12-31' })
  end_date: Date;

  @ApiProperty({ example: '123456789' })
  number: string;
}
