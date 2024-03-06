import { Injectable } from '@nestjs/common';
import { CreateTaxTypeDto } from './dto/create-tax-type.dto';
import { UpdateTaxTypeDto } from './dto/update-tax-type.dto';
import { TaxType } from './entities/tax-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TaxTypeService {
  constructor(
    @InjectRepository(TaxType)
    private ivaRepository: Repository<TaxType>,
  ) {}
  create(createTaxTypeDto: CreateTaxTypeDto) {
    return this.ivaRepository.save(createTaxTypeDto);
  }

  findAll() {
    return this.ivaRepository.find({
      select: ['id', 'name', 'valueDivider', 'percentage'],
      where: {
        active: true,
      },
    });
  }

  findOne(id: number) {
    return this.ivaRepository.findOne({
      select: ['id', 'name', 'valueDivider', 'percentage'],
      where: { id, active: true },
    });
  }

  update(id: number, updateTaxTypeDto: UpdateTaxTypeDto) {
    return this.ivaRepository.update(id, updateTaxTypeDto);
  }

  remove(id: number) {
    return this.ivaRepository.delete(id);
  }
}
