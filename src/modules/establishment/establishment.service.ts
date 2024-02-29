import { Injectable } from '@nestjs/common';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';
import { Establishment } from './entities/establishment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstablishmentService {
  constructor(
    @InjectRepository(Establishment)
    private establishmentRepository: Repository<Establishment>,
  ) {}
  create(createEstablishmentDto: CreateEstablishmentDto) {
    return this.establishmentRepository.save(createEstablishmentDto);
  }

  findAll() {
    return this.establishmentRepository.find({
      select: ['id', 'name'],
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.establishmentRepository.findOne({
      select: ['id', 'name'],
      where: { id, active: true },
    });
  }

  update(id: number, updateEstablishmentDto: UpdateEstablishmentDto) {
    return this.establishmentRepository.update(id, updateEstablishmentDto);
  }

  remove(id: number) {
    return this.establishmentRepository.delete(id);
  }
}
