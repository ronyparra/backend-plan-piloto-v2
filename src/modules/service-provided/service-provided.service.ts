import { Injectable } from '@nestjs/common';
import {
  CreateServiceProvidedDto,
  ServiceProvidedDetailDto,
} from './dto/create-service-provided.dto';
import { UpdateServiceProvidedDto } from './dto/update-service-provided.dto';
import { ServiceProvided } from './entities/service-provided.entity';
import { ServiceProvidedDetail } from './entities/service-provided-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceProvidedService {
  constructor(
    @InjectRepository(ServiceProvided)
    private serviceProvidedRepository: Repository<ServiceProvided>,
    @InjectRepository(ServiceProvidedDetail)
    private serviceProvidedDetailRepository: Repository<ServiceProvidedDetail>,
  ) {}
  create(createServiceProvidedDto: CreateServiceProvidedDto) {
    return this.serviceProvidedRepository.save(createServiceProvidedDto);
  }

  findAll() {
    return this.serviceProvidedRepository.find({
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
        serviceProvidedDetail: {
          serviceProvidedId: true,
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
        serviceProvidedDetail: {
          concept: true,
        },
      },
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.serviceProvidedRepository.findOne({
      where: { id, active: true },
    });
  }

  update(id: number, updateServiceProvidedDto: UpdateServiceProvidedDto) {
    return this.serviceProvidedRepository.update(id, updateServiceProvidedDto);
  }

  async updateDetail(
    id: number,
    serviceProvidedDetail: ServiceProvidedDetailDto[],
  ) {
    const currentDetail = await this.serviceProvidedDetailRepository.find({
      where: { serviceProvidedId: id },
    });

    for (const detail of currentDetail) {
      if (
        !serviceProvidedDetail.find((d) => d.conceptId === detail.conceptId)
      ) {
        await this.serviceProvidedDetailRepository.delete(detail);
      }
    }

    for (const detail of serviceProvidedDetail) {
      await this.serviceProvidedDetailRepository.save({
        ...detail,
        serviceProvidedId: id,
      });
    }
  }

  remove(id: number) {
    return this.serviceProvidedRepository.update(id, { active: false });
  }
}
