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
    serviceOrderDetail: {
      serviceOrderId: true,
      concept: {
        id: true,
        name: true,
      },
      quantity: true,
      price: true,
    },
    serviceBudgetOrderDetail: {
      serviceOrderId: true,
      serviceBudgetId: true,
    },
    serviceProvided: true,
    active: true,
  },
  relations: {
    customer: true,
    serviceType: true,
    user: true,
    serviceOrderDetail: {
      concept: true,
    },
    serviceProvided: true,
    serviceBudgetOrderDetail: true,
  },
};

@Injectable()
export class ServiceOrderService {
  constructor(
    @InjectRepository(ServiceOrder)
    private serviceOrderRepository: Repository<ServiceOrder>,
    @InjectRepository(ServiceOrderDetail)
    private serviceOrderDetailRepository: Repository<ServiceOrderDetail>,
  ) {}
  create(createServiceOrderDto: CreateServiceOrderDto) {
    return this.serviceOrderRepository.save(createServiceOrderDto);
  }

  findAll(queryStatus: QueryStatusDto) {
    return this.serviceOrderRepository.find({
      ...query,
      where: queryStatus,
      order: { id: 'DESC' },
    });
  }

  findOne(id: number) {
    return this.serviceOrderRepository.findOne({
      ...query,
      where: { id, active: true },
    });
  }

  async updateDetail(id: number, serviceOrderDetail: ServiceOrderDetailDto[]) {
    const currentDetails = await this.serviceOrderDetailRepository.find({
      where: { serviceOrderId: id },
    });
    for (const detail of currentDetails) {
      if (!serviceOrderDetail.find((d) => d.conceptId === detail.conceptId)) {
        await this.serviceOrderDetailRepository.delete({
          conceptId: detail.conceptId,
        });
      }
    }
    for (const detail of serviceOrderDetail) {
      await this.serviceOrderDetailRepository.save({
        ...detail,
        serviceRequestId: id,
      });
    }
  }

  update(id: number, updateServiceOrderDto: UpdateServiceOrderDto) {
    return this.serviceOrderRepository.update(id, updateServiceOrderDto);
  }

  remove(id: number) {
    return this.serviceOrderRepository.update(id, { active: false });
  }
}
