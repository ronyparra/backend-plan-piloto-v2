import { ApiProperty } from '@nestjs/swagger';

export class CreateDistrictDto {
  @ApiProperty({ example: 'Centro' })
  name: string;
  @ApiProperty({ example: 1 })
  city: {
    id: number;
  };
}
