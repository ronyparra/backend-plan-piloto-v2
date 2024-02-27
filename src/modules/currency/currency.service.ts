import { Injectable } from '@nestjs/common';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { Currency } from './entities/currency.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectRepository(Currency)
    private currencyRepository: Repository<Currency>,
  ) {}
  create(createCurrencyDto: CreateCurrencyDto) {
    return this.currencyRepository.save(createCurrencyDto);
  }

  findAll() {
    return this.currencyRepository.find({
      select: ['id', 'name', 'symbol'],
      where: {
        active: true,
      },
    });
  }

  findOne(id: number) {
    return this.currencyRepository.findOne({
      select: ['id', 'name', 'symbol'],
      where: { id, active: true },
    });
  }

  update(id: number, updateCurrencyDto: UpdateCurrencyDto) {
    return this.currencyRepository.update(id, updateCurrencyDto);
  }

  remove(id: number) {
    return this.currencyRepository.update(id, { active: false });
  }
}
