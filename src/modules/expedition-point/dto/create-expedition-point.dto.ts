import { ApiProperty } from '@nestjs/swagger';

export class CreateExpeditionPointDto {
  @ApiProperty({ example: 'Central' })
  name: string;
}
