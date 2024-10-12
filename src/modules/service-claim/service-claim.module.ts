import { Module } from '@nestjs/common';
import { ServiceClaimService } from './service-claim.service';
import { ServiceClaimController } from './service-claim.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceClaim } from './entities/service-claim.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceClaim])],
  controllers: [ServiceClaimController],
  providers: [ServiceClaimService],
})
export class ServiceClaimModule {}
