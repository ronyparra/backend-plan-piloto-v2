import { ApiProperty } from '@nestjs/swagger';

export class CreateAccountToPayDetailDto {
  purchaseId: number;

  @ApiProperty({ example: '2022/02/02' })
  due_date: Date;

  @ApiProperty({ example: 1 })
  amount: number;
}
