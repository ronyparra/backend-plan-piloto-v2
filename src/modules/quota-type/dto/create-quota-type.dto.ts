import { ApiProperty } from '@nestjs/swagger';

export class CreateQuotaTypeDto {
  @ApiProperty({ example: '15 Dias' })
  name: string;

  @ApiProperty({ example: 15 })
  value: number;

  @ApiProperty({ example: 'day' })
  type: string;
}
