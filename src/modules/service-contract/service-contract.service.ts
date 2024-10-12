import { Injectable } from '@nestjs/common';
import { CreateServiceContractDto } from './dto/create-service-contract.dto';
import { UpdateServiceContractDto } from './dto/update-service-contract.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceContract } from './entities/service-contract.entity';

@Injectable()
export class ServiceContractService {
  constructor(
    @InjectRepository(ServiceContract)
    private serviceContractRepository: Repository<ServiceContract>,
  ) {}
  create(createServiceContractDto: CreateServiceContractDto) {
    return this.serviceContractRepository.save(createServiceContractDto);
  }

  findAll() {
    return this.serviceContractRepository.find({
      relations: ['customer', 'user', 'serviceBudget'],
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.serviceContractRepository.findOne({
      where: { id, active: true },
      relations: ['customer', 'user', 'serviceBudget'],
    });
  }

  update(id: number, updateServiceContractDto: UpdateServiceContractDto) {
    return this.serviceContractRepository.update(id, updateServiceContractDto);
  }

  remove(id: number) {
    return this.serviceContractRepository.update(id, { active: false });
  }
}
