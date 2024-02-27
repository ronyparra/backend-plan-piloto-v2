import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { District } from './entities/district.entity';

@Injectable()
export class DistrictService {
  constructor(
    @InjectRepository(District)
    private districtRepository: Repository<District>,
  ) {}
  create(createDistrictDto: CreateDistrictDto) {
    return this.districtRepository.save(createDistrictDto);
  }

  findAll() {
    return this.districtRepository.find({
      select: {
        id: true,
        name: true,
        cityId: true,
        city: {
          id: true,
          name: true,
        },
      },
      relations: {
        city: true,
      },
    });
  }

  findOne(id: number) {
    return this.districtRepository.findOne({
      select: {
        id: true,
        name: true,
        cityId: true,
        city: {
          id: true,
          name: true,
        },
      },
      relations: {
        city: true,
      },
      where: { id },
    });
  }

  update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return this.districtRepository.update(id, updateDistrictDto);
  }

  remove(id: number) {
    return this.districtRepository.delete(id);
  }
}
