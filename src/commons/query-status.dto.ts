import { ApiProperty } from '@nestjs/swagger';

export class QueryStatusDto {
  @ApiProperty({ example: true })
  active: boolean;
}
