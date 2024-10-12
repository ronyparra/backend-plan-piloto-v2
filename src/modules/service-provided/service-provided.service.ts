import { Injectable } from '@nestjs/common';
import { CreateServiceProvidedDto } from './dto/create-service-provided.dto';
import { UpdateServiceProvidedDto } from './dto/update-service-provided.dto';
import { ServiceProvided } from './entities/service-provided.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceProvidedService {
  constructor(
    @InjectRepository(ServiceProvided)
    private serviceProvidedRepository: Repository<ServiceProvided>,
  ) {}
  create(createServiceProvidedDto: CreateServiceProvidedDto) {
    return this.serviceProvidedRepository.save(createServiceProvidedDto);
  }

  findAll() {
    return this.serviceProvidedRepository.find({
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

  remove(id: number) {
    return this.serviceProvidedRepository.update(id, { active: false });
  }
}
