// Convertir las entidades a DTOS

// MASTER
// @Column({ name: 'userId' })
// userId: number;

// @OneToMany(
//   () => PurchaseDetail,
//   (purchaseDetail) => purchaseDetail.purchaseId,
//   {
//     nullable: false,
//   },
// )
// @JoinColumn({ name: 'id' })
// purchaseDetail: PurchaseDetail[];

//DETAIL
// @PrimaryColumn({ name: 'purchaseId' })
//   purchaseId: number;

//   @ManyToOne(() => Concept, (concept) => concept.id, {
//     onUpdate: 'CASCADE',
//     nullable: false,
//   })

import { ApiProperty } from '@nestjs/swagger';
import { CreatePurchaseDetailDto } from './create-purchase-detail.dto';

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

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ type: [CreatePurchaseDetailDto] })
  purchaseDetail: CreatePurchaseDetailDto[];
}
