import { Injectable } from '@nestjs/common';
import { CreateServiceDiscountDto } from './dto/create-service-discount.dto';
import { UpdateServiceDiscountDto } from './dto/update-service-discount.dto';
import { ServiceDiscount } from './entities/service-discount.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceDiscountService {
  constructor(
    @InjectRepository(ServiceDiscount)
    private serviceDiscountRepository: Repository<ServiceDiscount>,
  ) {}
  create(createServiceDiscountDto: CreateServiceDiscountDto) {
    return this.serviceDiscountRepository.save(createServiceDiscountDto);
  }

  findAll() {
    return this.serviceDiscountRepository.find({
      select: {
        id: true,
        description: true,
        discountPercentage: true,
      },
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.serviceDiscountRepository.findOne({
      where: { id, active: true },
    });
  }

  update(id: number, updateServiceDiscountDto: UpdateServiceDiscountDto) {
    return this.serviceDiscountRepository.update(id, updateServiceDiscountDto);
  }

  remove(id: number) {
    return this.serviceDiscountRepository.update(id, { active: false });
  }
}
