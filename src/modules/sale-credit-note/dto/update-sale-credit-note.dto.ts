import { PartialType } from '@nestjs/swagger';
import { CreateSaleCreditNoteDto } from './create-sale-credit-note.dto';

export class UpdateSaleCreditNoteDto extends PartialType(
  CreateSaleCreditNoteDto,
) {}
