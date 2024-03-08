import { Module } from '@nestjs/common';
import { ServiceRequestService } from './service-request.service';
import { ServiceRequestController } from './service-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceRequest } from './entities/service-request.entity';
import { ServiceRequestDetail } from './entities/service-request-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceRequest, ServiceRequestDetail])],
  controllers: [ServiceRequestController],
  providers: [ServiceRequestService],
})
export class ServiceRequestModule {}
