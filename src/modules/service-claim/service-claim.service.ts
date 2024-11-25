import { Injectable } from '@nestjs/common';
import { CreateServiceClaimDto } from './dto/create-service-claim.dto';
import { UpdateServiceClaimDto } from './dto/update-service-claim.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceClaim } from './entities/service-claim.entity';

@Injectable()
export class ServiceClaimService {
  constructor(
    @InjectRepository(ServiceClaim)
    private serviceClaimRepository: Repository<ServiceClaim>,
  ) {}
  create(createServiceClaimDto: CreateServiceClaimDto) {
    return this.serviceClaimRepository.save(createServiceClaimDto);
  }

  findAll() {
    return this.serviceClaimRepository.find({
      select: {
        id: true,
        date: true,
        description: true,
        observation: true,
        serviceContractId: true,
        serviceContract: {
          id: true,
          serviceBudgetId: true,
          serviceBudget: {
            id: true,
            customer: {
              id: true,
              name: true,
            },
          },
        },
      },
      relations: {
        serviceContract: {
          serviceBudget: {
            customer: true,
          },
        },
      },
      where: { active: true },
      order: { id: 'DESC' },
    });
  }

  findOne(id: number) {
    return this.serviceClaimRepository.findOne({
      where: { id, active: true },
      relations: ['serviceBudget', 'serviceContract'],
    });
  }

  update(id: number, updateServiceClaimDto: UpdateServiceClaimDto) {
    return this.serviceClaimRepository.update(id, updateServiceClaimDto);
  }

  remove(id: number) {
    return this.serviceClaimRepository.update(id, { active: false });
  }
}
