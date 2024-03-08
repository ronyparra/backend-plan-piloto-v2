import { Module } from '@nestjs/common';
import { ServiceRequestService } from './service-request.service';
import { ServiceRequestController } from './service-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceRequest } from './entities/service-request.entity';
import { ServiceRequestConcept } from './entities/service-request-concept.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceRequest, ServiceRequestConcept])],
  controllers: [ServiceRequestController],
  providers: [ServiceRequestService],
})
export class ServiceRequestModule {}
