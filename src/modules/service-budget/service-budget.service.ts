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
      relations: ['serviceBudgetDetail'],
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
    for (const detail of serviceBudgetDetail) {
      await this.serviceBudgetDetailRepository.save({
        ...detail,
        serviceRequestId: id,
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
