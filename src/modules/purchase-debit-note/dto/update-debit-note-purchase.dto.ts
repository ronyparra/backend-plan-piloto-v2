import { PartialType } from '@nestjs/swagger';
import { CreateDebitNotePurchaseDto } from './create-debit-note-purchase.dto';

export class UpdateDebitNotePurchaseDto extends PartialType(CreateDebitNotePurchaseDto) {}
