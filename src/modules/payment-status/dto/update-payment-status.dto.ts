import { PartialType } from '@nestjs/swagger';
import { CreatePaymentStatusDto } from './create-payment-status.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePaymentStatusDto extends PartialType(
  CreatePaymentStatusDto,
) {
  @ApiProperty()
  name: string;
}
