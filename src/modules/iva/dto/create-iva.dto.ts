import { ApiProperty } from '@nestjs/swagger';

export class CreateIvaDto {
  @ApiProperty({ example: 'Iva 5' })
  name: string;

  @ApiProperty({ example: 5 })
  value: number;
}
