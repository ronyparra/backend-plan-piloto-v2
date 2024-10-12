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
      relations: ['serviceBudget', 'serviceContract'],
      where: { active: true },
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
