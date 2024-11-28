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
import { QueryStatusDto } from 'src/commons/query-status.dto';

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
        pricing: true,
      },
      quantity: true,
    },
    serviceBudgetRequestDetail: true,
    active: true,
  },
  relations: {
    customer: true,
    serviceType: true,
    user: true,
    serviceRequestDetail: {
      concept: true,
    },
    serviceBudgetRequestDetail: true,
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

  findAll(queryStatus: QueryStatusDto) {
    return this.serviceRequestRepository.find({
      ...query,
      where: queryStatus,
      order: { id: 'DESC' },
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
    const currentDetail = await this.serviceRequestDetailRepository.find({
      where: { serviceRequestId: id },
    });

    for (const detail of currentDetail) {
      if (
        !createServiceRequestDetailDto.find(
          (d) => d.conceptId === detail.conceptId,
        )
      ) {
        await this.serviceRequestDetailRepository.delete({
          conceptId: detail.conceptId,
        });
      }
    }

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
    return this.serviceRequestRepository.update(id, { active: false });
  }
}
