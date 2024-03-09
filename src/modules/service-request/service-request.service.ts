import { Injectable } from '@nestjs/common';
import { CreateServiceRequestDto } from './dto/create-service-request.dto';
import { UpdateServiceRequestDto } from './dto/update-service-request.dto';
import { ServiceRequest } from './entities/service-request.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

const query = {
  select: {
    id: true,
    date: true,
    observation: true,
    customerId: true,
    customer: {
      id: true,
      name: true,
      social_reason: true,
      document: true,
      phone: true,
    },
    user: {
      id: true,
      name: true,
    },
    userId: true,
    serviceRequestDetail: {
      serviceRequestId: true,
      serviceType: {
        id: true,
        name: true,
      },
    },
  },
  relations: {
    customer: true,
    user: true,
    serviceRequestDetail: {
      serviceType: true,
    },
  },
};

@Injectable()
export class ServiceRequestService {
  constructor(
    @InjectRepository(ServiceRequest)
    private serviceRequestRepository: Repository<ServiceRequest>,
  ) {}
  create(createServiceRequestDto: CreateServiceRequestDto) {
    return this.serviceRequestRepository.save(createServiceRequestDto);
  }

  findAll() {
    return this.serviceRequestRepository.find({
      ...query,
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.serviceRequestRepository.findOne({
      ...query,
      where: { id, active: true },
    });
  }

  update(id: number, updateServiceRequestDto: UpdateServiceRequestDto) {
    return this.serviceRequestRepository.update(id, updateServiceRequestDto);
  }

  remove(id: number) {
    return this.serviceRequestRepository.delete(id);
  }
}
