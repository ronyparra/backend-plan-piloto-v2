import { ApiProperty } from '@nestjs/swagger';

export class CreateBoxClosingDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 1 })
  boxOpeningId: number;

  @ApiProperty({ example: 1000 })
  amount: number;

  userId: number;
}
