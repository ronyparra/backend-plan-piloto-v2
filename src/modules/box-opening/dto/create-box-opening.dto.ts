import { ApiProperty } from '@nestjs/swagger';
export class CreateBoxOpeningDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 1 })
  strongboxId: number;

  @ApiProperty({ example: 1000 })
  amount: number;
}
