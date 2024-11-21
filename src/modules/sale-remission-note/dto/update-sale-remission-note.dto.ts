import { PartialType } from '@nestjs/swagger';
import { CreateSaleRemissionNoteDto } from './create-sale-remission-note.dto';

export class UpdateSaleRemissionNoteDto extends PartialType(CreateSaleRemissionNoteDto) {}
