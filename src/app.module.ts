import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
// Modules
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CityModule } from './modules/city/city.module';
import { DistrictModule } from './modules/district/district.module';
import { CustomerModule } from './modules/customer/customer.module';
import { CustomerBranchModule } from './modules/customer-branch/customer-branch.module';
import { CategoryModule } from './modules/category/category.module';
import { BrandModule } from './modules/brand/brand.module';
import { CurrencyModule } from './modules/currency/currency.module';
import { ConceptModule } from './modules/concept/concept.module';
import { PaymentStatusModule } from './modules/payment-status/payment-status.module';
// import { ActivityModule } from './modules/activity/activity.module';
import { InvoiceTypeModule } from './modules/invoice-type/invoice-type.module';
import { TaxTypeModule } from './modules/tax-type/tax-type.module';
import { DocumentTypeModule } from './modules/document-type/document-type.module';
import { EstablishmentModule } from './modules/establishment/establishment.module';
import { ExpeditionPointModule } from './modules/expedition-point/expedition-point.module';
import { StrongboxModule } from './modules/strongbox/strongbox.module';
import { StampingModule } from './modules/stamping/stamping.module';
import { ServiceTypeModule } from './modules/service-type/service-type.module';
import { SupplierModule } from './modules/supplier/supplier.module';
import { PurchaseModule } from './modules/purchase/purchase.module';
import { SaleModule } from './modules/sale/sale.module';
import { ServiceRequestModule } from './modules/service-request/service-request.module';
import { ServiceOrderModule } from './modules/service-order/service-order.module';
import { AccountToPayModule } from './modules/account-to-pay/account-to-pay.module';
import { QuotaTypeModule } from './modules/quota-type/quota-type.module';
import { ServiceBudgetModule } from './modules/service-budget/service-budget.module';
import { ServiceDiagnosticModule } from './modules/service-diagnostic/service-diagnostic.module';
import { ServiceProvidedModule } from './modules/service-provided/service-provided.module';
import { ServiceDiscountModule } from './modules/service-discount/service-discount.module';
import { ServiceContractModule } from './modules/service-contract/service-contract.module';
import { ServiceClaimModule } from './modules/service-claim/service-claim.module';
import { ServicePromotionModule } from './modules/service-promotion/service-promotion.module';
import { PurchaseOrderModule } from './modules/purchase-order/purchase-order.module';
import { PurchaseBudgetModule } from './modules/purchase-budget/purchase-budget.module';
import { PurchasePedidoModule } from './modules/purchase-pedido/purchase-pedido.module';
import { CreditNotePurchaseModule } from './modules/purchase-credit-note/credit-note-purchase.module';
import { DebitNotePurchaseModule } from './modules/purchase-debit-note/debit-note-purchase.module';
import { RemissionNotePurchaseModule } from './modules/purchase-remission-note/remission-note-purchase.module';
import { SalePedidoModule } from './modules/sale-pedido/sale-pedido.module';
import { SaleRemissionNoteModule } from './modules/sale-remission-note/sale-remission-note.module';
import { SaleCreditNoteModule } from './modules/sale-credit-note/sale-credit-note.module';
import { SaleDebitNoteModule } from './modules/sale-debit-note/sale-debit-note.module';
import { RoleModule } from './modules/role/role.module';
import { PermissionModule } from './modules/permission/permission.module';
import { BoxOpeningModule } from './modules/box-opening/box-opening.module';
import { BoxClosingModule } from './modules/box-closing/box-closing.module';
import { BackupModule } from './modules/backup/backup.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: configuration().database.host,
      port: configuration().database.port,
      username: configuration().database.username,
      password: configuration().database.password,
      database: configuration().database.name,
      synchronize: true,
      autoLoadEntities: true,
      //logging: true,
    }),
    // Modules
    // ActivityModule,
    AuthModule,
    BrandModule,
    CategoryModule,
    CityModule,
    ConceptModule,
    CurrencyModule,
    CustomerModule,
    CustomerBranchModule,
    DistrictModule,
    DocumentTypeModule,
    EstablishmentModule,
    ExpeditionPointModule,
    InvoiceTypeModule,
    TaxTypeModule,
    PaymentStatusModule,
    StrongboxModule,
    StampingModule,
    ServiceTypeModule,
    SupplierModule,
    UserModule,
    PurchaseModule,
    SaleModule,
    ServiceRequestModule,
    ServiceOrderModule,
    AccountToPayModule,
    QuotaTypeModule,
    ServiceBudgetModule,
    ServiceDiagnosticModule,
    ServiceProvidedModule,
    ServiceDiscountModule,
    ServiceContractModule,
    ServiceClaimModule,
    ServicePromotionModule,
    PurchaseOrderModule,
    PurchaseBudgetModule,
    PurchasePedidoModule,
    CreditNotePurchaseModule,
    DebitNotePurchaseModule,
    RemissionNotePurchaseModule,
    SalePedidoModule,
    SaleRemissionNoteModule,
    SaleCreditNoteModule,
    SaleDebitNoteModule,
    RoleModule,
    PermissionModule,
    BoxOpeningModule,
    BoxClosingModule,
    BackupModule,
  ],
})
export class AppModule {}
