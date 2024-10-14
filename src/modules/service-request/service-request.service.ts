import { Injectable } from '@nestjs/common';
import {
  CreateServiceRequestDto,
  CreateServiceRequestDetailDto,
} from './dto/create-service-request.dto';
import { UpdateServiceRequestDto } from './dto/update-service-request.dto';
import { ServiceRequest } from './entities/service-request.entity';
import { ServiceRequestDetail } from './entities/service-request-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

const query = {
  select: {
    id: true,
    date: true,
    observation: true,
    customerId: true,
    serviceType: {
      id: true,
      name: true,
    },
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
      concept: {
        id: true,
        name: true,
      },
      quantity: true,
    },
  },
  relations: {
    customer: true,
    serviceType: true,
    user: true,
    serviceRequestDetail: {
      concept: true,
    },
  },
};

@Injectable()
export class ServiceRequestService {
  constructor(
    @InjectRepository(ServiceRequest)
    private serviceRequestRepository: Repository<ServiceRequest>,
    @InjectRepository(ServiceRequestDetail)
    private serviceRequestDetailRepository: Repository<ServiceRequestDetail>,
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

  async updateDetail(
    id: number,
    createServiceRequestDetailDto: CreateServiceRequestDetailDto[],
  ) {
    for (const detail of createServiceRequestDetailDto) {
      await this.serviceRequestDetailRepository.save({
        ...detail,
        serviceRequestId: id,
      });
    }
  }

  update(id: number, updateServiceRequestDto: UpdateServiceRequestDto) {
    return this.serviceRequestRepository.update(id, updateServiceRequestDto);
  }

  remove(id: number) {
    return this.serviceRequestRepository.delete(id);
  }
}
