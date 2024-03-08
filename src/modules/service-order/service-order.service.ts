import { Injectable } from '@nestjs/common';
import { CreateServiceOrderDto } from './dto/create-service-order.dto';
import { UpdateServiceOrderDto } from './dto/update-service-order.dto';
import { ServiceOrder } from './entities/service-order.entity';
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
    serviceOrderConcept: {
      serviceOrderId: true,
      hourAndMinute: true,
      concept: {
        id: true,
        name: true,
      },
    },
  },
  relations: {
    customer: true,
    user: true,
    serviceOrderConcept: {
      concept: true,
    },
  },
};

@Injectable()
export class ServiceOrderService {
  constructor(
    @InjectRepository(ServiceOrder)
    private serviceOrderRepository: Repository<ServiceOrder>,
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

  update(id: number, updateServiceOrderDto: UpdateServiceOrderDto) {
    return this.serviceOrderRepository.update(id, updateServiceOrderDto);
  }

  remove(id: number) {
    return this.serviceOrderRepository.delete(id);
  }
}
