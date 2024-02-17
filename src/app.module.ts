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
    }),
    // Modules
    AuthModule,
    CityModule,
    CustomerModule,
    CustomerBranchModule,
    CategoryModule,
    DistrictModule,
    UserModule,
    BrandModule,
    CurrencyModule,
    ConceptModule,
  ],
})
export class AppModule {}
