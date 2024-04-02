import { Injectable } from '@nestjs/common';
import { CreateQuotaTypeDto } from './dto/create-quota-type.dto';
import { UpdateQuotaTypeDto } from './dto/update-quota-type.dto';
import { QuotaType } from './entities/quota-type.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuotaTypeService {
  constructor(
    @InjectRepository(QuotaType)
    private quotaTypeRepository: Repository<QuotaType>,
  ) {}
  create(createQuotaTypeDto: CreateQuotaTypeDto) {
    return this.quotaTypeRepository.save(createQuotaTypeDto);
  }

  findAll() {
    return this.quotaTypeRepository.find({
      select: {
        id: true,
        name: true,
        type: true,
        value: true,
      },
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.quotaTypeRepository.findOne({
      select: {
        id: true,
        name: true,
        type: true,
        value: true,
      },
      where: { id, active: true },
    });
  }

  update(id: number, updateQuotaTypeDto: UpdateQuotaTypeDto) {
    return this.quotaTypeRepository.update(id, updateQuotaTypeDto);
  }

  remove(id: number) {
    return this.quotaTypeRepository.update(id, { active: false });
  }
}
