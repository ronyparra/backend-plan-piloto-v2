import { PartialType } from '@nestjs/swagger';
import { CreateInvoiceTypeDto } from './create-invoice-type.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateInvoiceTypeDto extends PartialType(CreateInvoiceTypeDto) {
  @ApiProperty({ example: 'Credito' })
  name: string;
}
