import { Injectable } from '@nestjs/common';
import { CreateBoxClosingDto } from './dto/create-box-closing.dto';
import { UpdateBoxClosingDto } from './dto/update-box-closing.dto';
import { BoxClosing } from './entities/box-closing.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QueryStatusDto } from 'src/commons/query-status.dto';

@Injectable()
export class BoxClosingService {
  constructor(
    @InjectRepository(BoxClosing)
    private boxClosingRepository: Repository<BoxClosing>,
  ) {}
  create(createBoxClosingDto: CreateBoxClosingDto) {
    return this.boxClosingRepository.save(createBoxClosingDto);
  }

  findAll(queryStatus: QueryStatusDto) {
    return this.boxClosingRepository.find({
      where: queryStatus,
      relations: ['boxOpening'],
      order: { id: 'DESC' },
    });
  }

  findOne(id: number) {
    return this.boxClosingRepository.findOne({
      where: { id },
      relations: ['boxOpening'],
    });
  }

  update(id: number, updateBoxClosingDto: UpdateBoxClosingDto) {
    return this.boxClosingRepository.update(id, updateBoxClosingDto);
  }

  remove(id: number) {
    return this.boxClosingRepository.update(id, { active: false });
  }
}
