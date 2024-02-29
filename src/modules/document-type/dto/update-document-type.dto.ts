import { PartialType } from '@nestjs/swagger';
import { CreateDocumentTypeDto } from './create-document-type.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDocumentTypeDto extends PartialType(CreateDocumentTypeDto) {
  @ApiProperty({ example: 'Nota de credito' })
  name: string;
}
