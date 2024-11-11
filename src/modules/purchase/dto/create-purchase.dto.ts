import { ApiProperty } from '@nestjs/swagger';
import { Taxes } from 'src/interfaces/tax.interface';
import { CreateAccountToPayDto } from 'src/modules/account-to-pay/dto/create-account-to-pay.dto';

export class CreatePurchaseConceptDto {
  @ApiProperty({ example: 1 })
  amount: number;

  @ApiProperty({ example: 1 })
  quantity: number;

  @ApiProperty({ example: 1 })
  conceptId: number;

  @ApiProperty({ example: [] })
  taxes: Taxes[];
}

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
