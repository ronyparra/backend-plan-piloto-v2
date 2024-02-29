import { Injectable } from '@nestjs/common';
import { CreateIvaDto } from './dto/create-iva.dto';
import { UpdateIvaDto } from './dto/update-iva.dto';
import { Iva } from './entities/iva.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class IvaService {
  constructor(
    @InjectRepository(Iva)
    private ivaRepository: Repository<Iva>,
  ) {}
  create(createIvaDto: CreateIvaDto) {
    return this.ivaRepository.save(createIvaDto);
  }

  findAll() {
    return this.ivaRepository.find({
      select: ['id', 'name', 'value'],
      where: {
        active: true,
      },
    });
  }

  findOne(id: number) {
    return this.ivaRepository.findOne({
      select: ['id', 'name', 'value'],
      where: { id, active: true },
    });
  }

  update(id: number, updateIvaDto: UpdateIvaDto) {
    return this.ivaRepository.update(id, updateIvaDto);
  }

  remove(id: number) {
    return this.ivaRepository.delete(id);
  }
}
