import { Injectable } from '@nestjs/common';
import { CreateExpeditionPointDto } from './dto/create-expedition-point.dto';
import { UpdateExpeditionPointDto } from './dto/update-expedition-point.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExpeditionPoint } from './entities/expedition-point.entity';

@Injectable()
export class ExpeditionPointService {
  constructor(
    @InjectRepository(ExpeditionPoint)
    private expeditionPointRepository: Repository<ExpeditionPoint>,
  ) {}
  create(createExpeditionPointDto: CreateExpeditionPointDto) {
    return this.expeditionPointRepository.save(createExpeditionPointDto);
  }

  findAll() {
    return this.expeditionPointRepository.find({
      select: ['id', 'name', 'number'],
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.expeditionPointRepository.findOne({
      select: ['id', 'name', 'number'],
      where: { id, active: true },
    });
  }

  update(id: number, updateExpeditionPointDto: UpdateExpeditionPointDto) {
    return this.expeditionPointRepository.update(id, updateExpeditionPointDto);
  }

  remove(id: number) {
    return this.expeditionPointRepository.delete(id);
  }
}
