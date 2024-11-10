import { PartialType } from '@nestjs/swagger';
import { CreateRemissionNotePurchaseDto } from './create-remission-note-purchase.dto';

export class UpdateRemissionNotePurchaseDto extends PartialType(CreateRemissionNotePurchaseDto) {}
