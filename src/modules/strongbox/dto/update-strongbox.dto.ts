import { PartialType } from '@nestjs/swagger';
import { CreateStrongboxDto } from './create-strongbox.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStrongboxDto extends PartialType(CreateStrongboxDto) {
  @ApiProperty({ example: 'Caja fuerte 1' })
  name: string;

  @ApiProperty({ example: 1 })
  currencyId: number;
}
