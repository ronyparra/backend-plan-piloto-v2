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
      // logging: true,
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
  ],
})
export class AppModule {}
