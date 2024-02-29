import { ApiProperty } from '@nestjs/swagger';

export class CreateEstablishmentDto {
  @ApiProperty({ example: 'Central' })
  name: string;

  @ApiProperty({ example: '001' })
  number: string;
}
