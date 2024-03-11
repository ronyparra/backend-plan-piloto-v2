import { ApiProperty } from '@nestjs/swagger';
// import { PurchaseConcept } from '../entities/purchase-concept.entity';
import { CreateAccountToPayDto } from './create-account-to-pay.dto';
import { CreatePurchaseConceptDto } from './create-purchase-concept.dto';

export class CreatePurchaseDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: '123456789' })
  invoice_number: string;

  @ApiProperty({ example: '123456789' })
  observation: string;

  @ApiProperty({ example: '123456789' })
  stamping: string;

  @ApiProperty({ example: 1 })
  invoiceTypeId: number;

  @ApiProperty({ example: 1 })
  supplierId: number;

  userId: number;

  @ApiProperty({ type: [CreatePurchaseConceptDto] })
  purchaseConcept: CreatePurchaseConceptDto[];

  @ApiProperty({ type: [CreateAccountToPayDto] })
  accountToPay: CreateAccountToPayDto;
}
