import { ApiProperty } from '@nestjs/swagger';

export class CreateExpeditionPointDto {
  @ApiProperty({ example: 'Central' })
  name: string;

  @ApiProperty({ example: '001' })
  number: string;
}
