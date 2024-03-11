import { ApiProperty } from '@nestjs/swagger';
import { CreateAccountToPayDetailDto } from './create-account-to-pay-detail.dto';

export class CreateAccountToPayDto {
  @ApiProperty({ example: 1 })
  supplierId: number;

  userId: number;

  @ApiProperty({ type: [CreateAccountToPayDetailDto] })
  accountToPayDetail: CreateAccountToPayDetailDto[];
}
