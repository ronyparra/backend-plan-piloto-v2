import { ApiProperty } from '@nestjs/swagger';

export class CreateEstablishmentDto {
  @ApiProperty({ example: 'Central' })
  name: string;
}
