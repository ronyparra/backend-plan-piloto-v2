import { PartialType } from '@nestjs/swagger';
import { CreateEstablishmentDto } from './create-establishment.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEstablishmentDto extends PartialType(
  CreateEstablishmentDto,
) {
  @ApiProperty({ example: 'Central' })
  name: string;
}
