import { ApiProperty } from '@nestjs/swagger';
import { CreateAccountToPayDetailDto } from './create-account-to-pay-detail.dto';

export class CreateAccountToPayDto {
  date: Date;

  purchaseId: number;

  userId: number;

  @ApiProperty({ type: [CreateAccountToPayDetailDto] })
  accountToPayDetail: CreateAccountToPayDetailDto[];
}
