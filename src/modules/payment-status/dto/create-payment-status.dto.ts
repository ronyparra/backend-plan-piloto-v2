import { ApiProperty } from '@nestjs/swagger';
export class CreatePaymentStatusDto {
  @ApiProperty()
  name: string;
}
