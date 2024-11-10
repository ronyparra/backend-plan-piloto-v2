import { PartialType } from '@nestjs/swagger';
import { CreateCreditNotePurchaseDto } from './create-credit-note-purchase.dto';

export class UpdateCreditNotePurchaseDto extends PartialType(CreateCreditNotePurchaseDto) {}
