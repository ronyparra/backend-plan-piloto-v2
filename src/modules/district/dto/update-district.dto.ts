import { PartialType } from '@nestjs/swagger';
import { CreateDistrictDto } from './create-district.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDistrictDto extends PartialType(CreateDistrictDto) {
  @ApiProperty()
  name: string;
  @ApiProperty()
  cityId: number;
}
