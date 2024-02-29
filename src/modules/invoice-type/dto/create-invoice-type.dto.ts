import { ApiProperty } from '@nestjs/swagger';

export class CreateInvoiceTypeDto {
  @ApiProperty({ example: 'Contado' })
  name: string;
}
