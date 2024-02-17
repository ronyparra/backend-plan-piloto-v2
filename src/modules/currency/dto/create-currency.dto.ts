import { ApiProperty } from '@nestjs/swagger';
export class CreateCurrencyDto {
  @ApiProperty({ example: 'USD' })
  name: string;

  @ApiProperty({ example: 'USD' })
  symbol: string;
}
