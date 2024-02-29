import { Injectable } from '@nestjs/common';
import { CreateStampingDto } from './dto/create-stamping.dto';
import { UpdateStampingDto } from './dto/update-stamping.dto';
import { Stamping } from './entities/stamping.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StampingService {
  constructor(
    @InjectRepository(Stamping)
    private stampingRepository: Repository<Stamping>,
  ) {}
  create(createStampingDto: CreateStampingDto) {
    return this.stampingRepository.save(createStampingDto);
  }

  findAll() {
    return this.stampingRepository.find({
      select: {
        id: true,
        name: true,
        expeditionPointId: true,
        establishmentId: true,
        number: true,
        expeditionPoint: {
          id: true,
          name: true,
        },
        establishment: {
          id: true,
          name: true,
        },
      },
      where: {
        active: true,
      },
      relations: ['expeditionPoint', 'establishment'],
    });
  }

  findOne(id: number) {
    return this.stampingRepository.findOne({
      select: {
        id: true,
        name: true,
        expeditionPointId: true,
        establishmentId: true,
        number: true,
        expeditionPoint: {
          id: true,
          name: true,
        },
        establishment: {
          id: true,
          name: true,
        },
      },
      where: { id, active: true },
      relations: ['expeditionPoint', 'establishment'],
    });
  }

  update(id: number, updateStampingDto: UpdateStampingDto) {
    return this.stampingRepository.update(id, updateStampingDto);
  }

  remove(id: number) {
    return this.stampingRepository.delete(id);
  }
}
