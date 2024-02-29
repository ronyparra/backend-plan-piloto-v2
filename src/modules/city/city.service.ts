import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}
  create(createCityDto: CreateCityDto) {
    return this.cityRepository.save(createCityDto);
  }

  findAll() {
    return this.cityRepository.find({
      select: ['id', 'name'],
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.cityRepository.findOne({
      select: ['id', 'name'],
      where: { id, active: true },
    });
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return this.cityRepository.update(id, updateCityDto);
  }

  remove(id: number) {
    return this.cityRepository.delete(id);
  }
}
