import { Injectable } from '@nestjs/common';
import {
  CreateServiceDiagnosticDto,
  CreateServiceBudgetDetailDto,
} from './dto/create-service-diagnostic.dto';
import { UpdateServiceDiagnosticDto } from './dto/update-service-diagnostic.dto';
import { ServiceDiagnostic } from './entities/service-diagnostic.entity';
import { ServiceDiagnosticDetail } from './entities/service-diagnostic-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceDiagnosticService {
  constructor(
    @InjectRepository(ServiceDiagnostic)
    private serviceDiagnosticRepository: Repository<ServiceDiagnostic>,
    @InjectRepository(ServiceDiagnosticDetail)
    private serviceDiagnosticDetailRepository: Repository<ServiceDiagnosticDetail>,
  ) {}
  create(createServiceDiagnosticDto: CreateServiceDiagnosticDto) {
    return this.serviceDiagnosticRepository.save(createServiceDiagnosticDto);
  }

  createDetail(serviceDiagnosticDetail: CreateServiceBudgetDetailDto[]) {
    return this.serviceDiagnosticDetailRepository.save(serviceDiagnosticDetail);
  }

  findAll() {
    return this.serviceDiagnosticRepository.find({
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
        serviceDiagnosticDetail: true,
        serviceBudgetDiagnosticDetail: true,
      },
      relations: {
        customer: true,
        user: true,
        serviceDiagnosticDetail: true,
        serviceBudgetDiagnosticDetail: true,
      },
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.serviceDiagnosticRepository.findOne({
      relations: ['serviceDiagnosticDetail'],
      where: { id, active: true },
    });
  }

  async updateDetail(
    id: number,
    serviceDiagnosticDetail: CreateServiceBudgetDetailDto[],
  ) {
    const currentDetail = await this.serviceDiagnosticDetailRepository.find({
      where: { serviceDiagnosticId: id },
    });
    for (const detail of currentDetail) {
      if (!serviceDiagnosticDetail.find((d) => d.id === detail.id)) {
        await this.serviceDiagnosticDetailRepository.delete({
          id: detail.id,
        });
      }
    }
    for (const detail of serviceDiagnosticDetail) {
      await this.serviceDiagnosticDetailRepository.save({
        ...detail,
        serviceDiagnosticId: id,
      });
    }
  }

  update(id: number, updateServiceDiagnosticDto: UpdateServiceDiagnosticDto) {
    return this.serviceDiagnosticRepository.update(
      id,
      updateServiceDiagnosticDto,
    );
  }

  remove(id: number) {
    return this.serviceDiagnosticRepository.delete(id);
  }
}
