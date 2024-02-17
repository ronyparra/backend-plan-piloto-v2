import { PartialType } from '@nestjs/swagger';
import { CreateCurrencyDto } from './create-currency.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCurrencyDto extends PartialType(CreateCurrencyDto) {
  @ApiProperty({ example: 'USD' })
  name: string;

  @ApiProperty({ example: 'USD' })
  symbol: string;
}
