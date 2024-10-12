import { Module } from '@nestjs/common';
import { ServiceProvidedService } from './service-provided.service';
import { ServiceProvidedController } from './service-provided.controller';
import { ServiceProvidedDetail } from './entities/service-provided-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceProvided } from './entities/service-provided.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceProvided, ServiceProvidedDetail])],
  controllers: [ServiceProvidedController],
  providers: [ServiceProvidedService],
})
export class ServiceProvidedModule {}
