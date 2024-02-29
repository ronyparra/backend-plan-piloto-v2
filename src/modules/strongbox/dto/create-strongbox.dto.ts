import { ApiProperty } from '@nestjs/swagger';

export class CreateStrongboxDto {
  @ApiProperty({ example: 'Caja fuerte 1' })
  name: string;

  @ApiProperty({ example: 1 })
  currencyId: number;
}
