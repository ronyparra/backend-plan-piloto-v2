import { PartialType } from '@nestjs/swagger';
import { CreateQuotaTypeDto } from './create-quota-type.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateQuotaTypeDto extends PartialType(CreateQuotaTypeDto) {
  @ApiProperty({ example: '30 Dias' })
  name: string;

  @ApiProperty({ example: 30 })
  value: number;

  @ApiProperty({ example: 'day' })
  type: string;
}
