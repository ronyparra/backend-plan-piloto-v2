import { Module } from '@nestjs/common';
import { ServiceContractService } from './service-contract.service';
import { ServiceContractController } from './service-contract.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceContract } from './entities/service-contract.entity';
import { ServiceContractClausule } from './entities/service-contract-clausule.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ServiceContract, ServiceContractClausule]),
  ],
  controllers: [ServiceContractController],
  providers: [ServiceContractService],
})
export class ServiceContractModule {}
