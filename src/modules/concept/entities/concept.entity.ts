import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Category } from 'src/modules/category/entities/category.entity';
import { Currency } from 'src/modules/currency/entities/currency.entity';
import { TaxType } from 'src/modules/tax-type/entities/tax-type.entity';
import { PurchaseConcept } from 'src/modules/purchase/entities/purchase-concept.entity';
import { SaleConcept } from 'src/modules/sale/entities/sale-concept.entity';
import { ServiceRequestDetail } from 'src/modules/service-request/entities/service-request-detail.entity';
import { ServiceOrderDetail } from 'src/modules/service-order/entities/service-order-detail.entity';
import { ServiceBudgetDetail } from 'src/modules/service-budget/entities/service-budget-detail.entity';
import { ServiceProvidedDetail } from 'src/modules/service-provided/entities/service-provided-detail.entity';
import { PurchasePedidoDetail } from 'src/modules/purchase-pedido/entities/purchase-pedido-detail.entity';
import { PurchaseBudgetDetail } from 'src/modules/purchase-budget/entities/purchase-budget-detail.entity';
import { PurchaseOrderDetail } from 'src/modules/purchase-order/entities/purchase-order-detail.entity';
import { CreditNotePurchaseDetail } from 'src/modules/purchase-credit-note/entities/credit-note-purchase-detail.entity';
import { DebitNotePurchaseDetail } from 'src/modules/purchase-debit-note/entities/debit-note-purchase-detail.entity';
import { RemissionNotePurchaseDetail } from 'src/modules/purchase-remission-note/entities/remission-note-purchase-detail.entity';
import { SalePedidoDetail } from 'src/modules/sale-pedido/entities/sale-pedido-detail.entity';
import { SaleRemissionNoteDetail } from 'src/modules/sale-remission-note/entities/sale-remission-note-detail.entity';
import { SaleCreditNoteDetail } from 'src/modules/sale-credit-note/entities/sale-credit-note-detail.entity';
import { SaleDebitNoteDetail } from 'src/modules/sale-debit-note/entities/sale-debit-note-detail.entity';

@Entity()
export class Concept {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  pricing: number;

  @ManyToOne(() => TaxType, (taxType) => taxType.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'taxTypeId' })
  taxType: TaxType;

  @Column({ name: 'taxTypeId' })
  taxTypeId: number;

  @OneToMany(
    () => PurchaseConcept,
    (purchaseConcept) => purchaseConcept.concept,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'id' })
  conceptPurchase: PurchaseConcept[];

  @OneToMany(
    () => SaleDebitNoteDetail,
    (saleDebitNoteDetail) => saleDebitNoteDetail.concept,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'id' })
  saleDebitNoteDetail: SaleDebitNoteDetail[];

  @OneToMany(
    () => SaleRemissionNoteDetail,
    (saleRemissionNoteDetail) => saleRemissionNoteDetail.concept,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'id' })
  saleRemissionNoteDetail: SaleRemissionNoteDetail[];

  @OneToMany(
    () => SalePedidoDetail,
    (salePedidoDetail) => salePedidoDetail.concept,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'id' })
  salePedidoDetail: SalePedidoDetail[];

  @OneToMany(
    () => SaleCreditNoteDetail,
    (saleCreditNoteDetail) => saleCreditNoteDetail.concept,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'id' })
  saleCreditNoteDetail: SaleCreditNoteDetail[];

  @OneToMany(
    () => ServiceProvidedDetail,
    (serviceProvidedDetail) => serviceProvidedDetail.concept,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'id' })
  serviceProvidedDetail: ServiceProvidedDetail[];

  @OneToMany(
    () => RemissionNotePurchaseDetail,
    (remissionNotePurchaseDetail) => remissionNotePurchaseDetail.concept,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'id' })
  remissionNotePurchaseDetail: RemissionNotePurchaseDetail[];

  @OneToMany(
    () => DebitNotePurchaseDetail,
    (debitNotePurchaseDetail) => debitNotePurchaseDetail.concept,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'id' })
  debitNotePurchaseDetail: DebitNotePurchaseDetail[];

  @OneToMany(
    () => CreditNotePurchaseDetail,
    (creditNotePurchaseDetail) => creditNotePurchaseDetail.concept,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'id' })
  creditNotePurchaseDetail: CreditNotePurchaseDetail[];

  @OneToMany(
    () => ServiceBudgetDetail,
    (serviceBudgetDetail) => serviceBudgetDetail.concept,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'id' })
  serviceBudgetDetail: ServiceBudgetDetail[];

  @OneToMany(
    () => ServiceRequestDetail,
    (serviceRequestDetail) => serviceRequestDetail.concept,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'id' })
  serviceRequestDetail: ServiceRequestDetail[];

  @OneToMany(
    () => ServiceOrderDetail,
    (serviceOrderDetail) => serviceOrderDetail.concept,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'id' })
  serviceOrderDetail: ServiceOrderDetail[];

  @OneToMany(
    () => PurchasePedidoDetail,
    (purchasePedidoDetail) => purchasePedidoDetail.concept,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'id' })
  purchasePedidoDetail: PurchasePedidoDetail[];

  @OneToMany(() => SaleConcept, (saleConcept) => saleConcept.concept, {
    nullable: false,
  })
  @JoinColumn({ name: 'id' })
  saleConcept: SaleConcept[];

  @OneToMany(
    () => PurchaseBudgetDetail,
    (purchaseBudgetDetail) => purchaseBudgetDetail.concept,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'id' })
  purchaseBudgetDetail: PurchaseBudgetDetail[];

  @OneToMany(
    () => PurchaseOrderDetail,
    (purchaseOrderDetail) => purchaseOrderDetail.concept,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'id' })
  purchaseOrderDetail: PurchaseOrderDetail[];

  @ManyToOne(() => Category, (category) => category.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @Column({ name: 'categoryId' })
  categoryId: number;

  @ManyToOne(() => Currency, (currency) => currency.id, {
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'currencyId' })
  currency: Currency;

  @Column({ name: 'currencyId' })
  currencyId: number;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
