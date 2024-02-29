import { ApiProperty } from '@nestjs/swagger';

export class CreateDocumentTypeDto {
  @ApiProperty({ example: 'Factura' })
  name: string;
}
