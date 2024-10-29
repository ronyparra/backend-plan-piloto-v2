import { Injectable } from '@nestjs/common';
import { CreateServiceBudgetDto } from './dto/create-service-budget.dto';
import { ServiceBudgetDetailDto } from './dto/create-service-budget.dto';
import { UpdateServiceBudgetDto } from './dto/update-service-budget.dto';
import { ServiceBudget } from './entities/service-budget.entity';
import { ServiceBudgetDetail } from './entities/service-budget-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceBudgetService {
  constructor(
    @InjectRepository(ServiceBudget)
    private serviceBudgetRepository: Repository<ServiceBudget>,
    @InjectRepository(ServiceBudgetDetail)
    private serviceBudgetDetailRepository: Repository<ServiceBudgetDetail>,
  ) {}
  create(createServiceBudgetDto: CreateServiceBudgetDto) {
    return this.serviceBudgetRepository.save(createServiceBudgetDto);
  }

  findAll() {
    return this.serviceBudgetRepository.find({
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
        serviceBudgetDetail: {
          serviceBudgetId: true,
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
        serviceBudgetDetail: {
          concept: true,
        },
      },
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.serviceBudgetRepository.findOne({
      relations: ['serviceBudgetDetail'],
      where: { id, active: true },
    });
  }

  async updateDetail(
    id: number,
    serviceBudgetDetail: ServiceBudgetDetailDto[],
  ) {
    const currentDetail = await this.serviceBudgetDetailRepository.find({
      where: { serviceBudgetId: id },
    });
    for (const detail of currentDetail) {
      if (!serviceBudgetDetail.find((d) => d.conceptId === detail.conceptId)) {
        await this.serviceBudgetDetailRepository.delete({
          conceptId: detail.conceptId,
        });
      }
    }
    for (const detail of serviceBudgetDetail) {
      await this.serviceBudgetDetailRepository.save({
        ...detail,
        serviceBudgetId: id,
      });
    }
  }

  update(id: number, updateServiceBudgetDto: UpdateServiceBudgetDto) {
    return this.serviceBudgetRepository.update(id, updateServiceBudgetDto);
  }

  remove(id: number) {
    return this.serviceBudgetRepository.delete(id);
  }
}
