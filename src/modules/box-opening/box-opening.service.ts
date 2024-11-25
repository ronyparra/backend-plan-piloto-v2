import { Injectable } from '@nestjs/common';
import { CreateBoxOpeningDto } from './dto/create-box-opening.dto';
import { UpdateBoxOpeningDto } from './dto/update-box-opening.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoxOpening } from './entities/box-opening.entity';
import { QueryStatusDto } from 'src/commons/query-status.dto';

@Injectable()
export class BoxOpeningService {
  constructor(
    @InjectRepository(BoxOpening)
    private boxOpeningRepository: Repository<BoxOpening>,
  ) {}
  create(createBoxOpeningDto: CreateBoxOpeningDto) {
    return this.boxOpeningRepository.save(createBoxOpeningDto);
  }

  findAll(queryStatus: QueryStatusDto) {
    return this.boxOpeningRepository.find({
      relations: ['user', 'strongbox'],
      where: queryStatus,
      order: { id: 'DESC' },
    });
  }

  findOne(id: number) {
    return this.boxOpeningRepository.findOne({
      where: { id },
      relations: ['user', 'strongbox'],
    });
  }

  update(id: number, updateBoxOpeningDto: UpdateBoxOpeningDto) {
    return this.boxOpeningRepository.update(id, updateBoxOpeningDto);
  }

  remove(id: number) {
    return this.boxOpeningRepository.update(id, { active: false });
  }
}
