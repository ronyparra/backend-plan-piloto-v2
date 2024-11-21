import { PartialType } from '@nestjs/swagger';
import { CreateSaleDebitNoteDto } from './create-sale-debit-note.dto';

export class UpdateSaleDebitNoteDto extends PartialType(CreateSaleDebitNoteDto) {}
