import { Injectable } from '@nestjs/common';
import { CreateServiceTypeDto } from './dto/create-service-type.dto';
import { UpdateServiceTypeDto } from './dto/update-service-type.dto';
import { ServiceType } from './entities/service-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceTypeService {
  constructor(
    @InjectRepository(ServiceType)
    private serviceTypeRepository: Repository<ServiceType>,
  ) {}
  create(createServiceTypeDto: CreateServiceTypeDto) {
    return this.serviceTypeRepository.save(createServiceTypeDto);
  }

  findAll() {
    return this.serviceTypeRepository.find({
      select: ['id', 'name'],
      where: {
        active: true,
      },
    });
  }

  findOne(id: number) {
    return this.serviceTypeRepository.findOne({
      select: ['id', 'name'],
      where: { id, active: true },
    });
  }

  update(id: number, updateServiceTypeDto: UpdateServiceTypeDto) {
    return this.serviceTypeRepository.update(id, updateServiceTypeDto);
  }

  remove(id: number) {
    return this.serviceTypeRepository.delete(id);
  }
}
