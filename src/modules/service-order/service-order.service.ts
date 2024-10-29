import { Injectable } from '@nestjs/common';
import {
  CreateServiceOrderDto,
  ServiceOrderDetailDto,
} from './dto/create-service-order.dto';
import { UpdateServiceOrderDto } from './dto/update-service-order.dto';
import { ServiceOrder } from './entities/service-order.entity';
import { ServiceOrderDetail } from './entities/service-order-detail.entity';
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
    serviceOrderDetail: {
      serviceOrderId: true,
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
    serviceOrderDetail: {
      concept: true,
    },
  },
};

@Injectable()
export class ServiceOrderService {
  constructor(
    @InjectRepository(ServiceOrder)
    private serviceOrderRepository: Repository<ServiceOrder>,
    @InjectRepository(ServiceOrderDetail)
    private serviceRequestDetailRepository: Repository<ServiceOrderDetail>,
  ) {}
  create(createServiceOrderDto: CreateServiceOrderDto) {
    return this.serviceOrderRepository.save(createServiceOrderDto);
  }

  findAll() {
    return this.serviceOrderRepository.find({
      ...query,
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.serviceOrderRepository.findOne({
      ...query,
      where: { id, active: true },
    });
  }

  async updateDetail(id: number, serviceOrderDetail: ServiceOrderDetailDto[]) {
    for (const detail of serviceOrderDetail) {
      await this.serviceRequestDetailRepository.save({
        ...detail,
        serviceRequestId: id,
      });
    }
  }

  update(id: number, updateServiceOrderDto: UpdateServiceOrderDto) {
    return this.serviceOrderRepository.update(id, updateServiceOrderDto);
  }

  remove(id: number) {
    return this.serviceOrderRepository.delete(id);
  }
}
