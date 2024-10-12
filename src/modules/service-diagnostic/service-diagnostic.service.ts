import { Injectable } from '@nestjs/common';
import { CreateServiceDiagnosticDto } from './dto/create-service-diagnostic.dto';
import { UpdateServiceDiagnosticDto } from './dto/update-service-diagnostic.dto';
import { ServiceDiagnostic } from './entities/service-diagnostic.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceDiagnosticService {
  constructor(
    @InjectRepository(ServiceDiagnostic)
    private serviceDiagnosticRepository: Repository<ServiceDiagnostic>,
  ) {}
  create(createServiceDiagnosticDto: CreateServiceDiagnosticDto) {
    return this.serviceDiagnosticRepository.save(createServiceDiagnosticDto);
  }

  findAll() {
    return this.serviceDiagnosticRepository.find({
      relations: ['serviceDiagnosticDetail'],
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.serviceDiagnosticRepository.findOne({
      relations: ['serviceDiagnosticDetail'],
      where: { id, active: true },
    });
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
