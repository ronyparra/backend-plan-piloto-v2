import { Injectable } from '@nestjs/common';
import { CreateServicePromotionDto } from './dto/create-service-promotion.dto';
import { UpdateServicePromotionDto } from './dto/update-service-promotion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServicePromotion } from './entities/service-promotion.entity';

@Injectable()
export class ServicePromotionService {
  constructor(
    @InjectRepository(ServicePromotion)
    private servicePromotionRepository: Repository<ServicePromotion>,
  ) {}
  create(createServicePromotionDto: CreateServicePromotionDto) {
    return this.servicePromotionRepository.save(createServicePromotionDto);
  }

  findAll() {
    return this.servicePromotionRepository.find({
      select: {
        id: true,
        name: true,
        startDate: true,
        endDate: true,
        discountPercentage: true,
        serviceTypeId: true,
        serviceType: {
          id: true,
          name: true,
        },
      },
      relations: ['serviceType'],
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.servicePromotionRepository.findOne({
      where: { id, active: true },
    });
  }

  update(id: number, updateServicePromotionDto: UpdateServicePromotionDto) {
    return this.servicePromotionRepository.update(
      id,
      updateServicePromotionDto,
    );
  }

  remove(id: number) {
    return this.servicePromotionRepository.update(id, { active: false });
  }
}
