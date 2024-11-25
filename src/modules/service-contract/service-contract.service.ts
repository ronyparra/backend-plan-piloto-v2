import { Injectable } from '@nestjs/common';
import {
  CreateServiceContractDto,
  ServiceContractDetailDto,
} from './dto/create-service-contract.dto';
import { UpdateServiceContractDto } from './dto/update-service-contract.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceContract } from './entities/service-contract.entity';
import { ServiceContractClausule } from './entities/service-contract-clausule.entity';
import { QueryStatusDto } from 'src/commons/query-status.dto';

@Injectable()
export class ServiceContractService {
  constructor(
    @InjectRepository(ServiceContract)
    private serviceContractRepository: Repository<ServiceContract>,
    @InjectRepository(ServiceContractClausule)
    private serviceContractClausuleRepository: Repository<ServiceContractClausule>,
  ) {}
  create(createServiceContractDto: CreateServiceContractDto) {
    return this.serviceContractRepository.save(createServiceContractDto);
  }

  findAll(queryStatus: QueryStatusDto) {
    return this.serviceContractRepository.find({
      select: {
        id: true,
        date: true,
        observation: true,
        customerId: true,
        userId: true,
        serviceBudgetId: true,
        user: {
          id: true,
          name: true,
        },
        serviceBudget: {
          id: true,
          customer: {
            id: true,
            name: true,
          },
          serviceBudgetDetail: true,
        },
        serviceContractClausule: true,
        active: true,
      },
      relations: {
        user: true,
        serviceBudget: {
          customer: true,
          serviceBudgetOrderDetail: true,
          serviceBudgetDetail: {
            concept: true,
          },
        },
        customer: true,
        serviceContractClausule: true,
      },
      where: queryStatus,
      order: { id: 'DESC' },
    });
  }

  findOne(id: number) {
    return this.serviceContractRepository.findOne({
      where: { id, active: true },
      relations: ['customer', 'user', 'serviceBudget'],
    });
  }

  async updateDetail(id: number, serviceDetail: ServiceContractDetailDto[]) {
    const currentDetail = await this.serviceContractClausuleRepository.find({
      where: { serviceContractId: id },
    });
    for (const detail of currentDetail) {
      if (!serviceDetail.find((d) => d.id === detail.id)) {
        await this.serviceContractClausuleRepository.delete({
          id: detail.id,
        });
      }
    }
    for (const detail of serviceDetail) {
      await this.serviceContractClausuleRepository.save({
        ...detail,
        serviceContractId: id,
      });
    }
  }

  update(id: number, updateServiceContractDto: UpdateServiceContractDto) {
    return this.serviceContractRepository.update(id, updateServiceContractDto);
  }

  remove(id: number) {
    return this.serviceContractRepository.update(id, { active: false });
  }
}
