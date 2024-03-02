import { Injectable } from '@nestjs/common';
import { CreateConceptDto } from './dto/create-concept.dto';
import { UpdateConceptDto } from './dto/update-concept.dto';
import { Concept } from './entities/concept.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ConceptService {
  constructor(
    @InjectRepository(Concept)
    private conceptRepository: Repository<Concept>,
  ) {}
  create(createConceptDto: CreateConceptDto) {
    return this.conceptRepository.save(createConceptDto);
  }

  findAll() {
    return this.conceptRepository.find({
      select: {
        id: true,
        name: true,
        taxTypeId: true,
        taxType: {
          id: true,
          name: true,
        },
        categoryId: true,
        category: {
          id: true,
          name: true,
        },
        currencyId: true,
        currency: {
          id: true,
          name: true,
        },
        pricing: true,
      },
      where: {
        active: true,
      },
      relations: ['category', 'currency', 'taxType'],
    });
  }

  findOne(id: number) {
    return this.conceptRepository.findOne({
      select: {
        id: true,
        name: true,
        taxTypeId: true,
        taxType: {
          id: true,
          name: true,
        },
        categoryId: true,
        category: {
          id: true,
          name: true,
        },
        currencyId: true,
        currency: {
          id: true,
          name: true,
        },
        pricing: true,
      },
      where: { id, active: true },
      relations: ['category', 'currency', 'taxType'],
    });
  }

  update(id: number, updateConceptDto: UpdateConceptDto) {
    return this.conceptRepository.update(id, updateConceptDto);
  }

  remove(id: number) {
    return this.conceptRepository.delete(id);
  }
}
