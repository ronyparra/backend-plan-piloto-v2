import { PartialType } from '@nestjs/swagger';
import { CreateCityDto } from './create-city.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCityDto extends PartialType(CreateCityDto) {
  @ApiProperty({ example: 'Asuncion' })
  name: string;
}
