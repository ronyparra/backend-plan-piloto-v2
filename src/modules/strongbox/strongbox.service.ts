import { Injectable } from '@nestjs/common';
import { CreateStrongboxDto } from './dto/create-strongbox.dto';
import { UpdateStrongboxDto } from './dto/update-strongbox.dto';
import { Strongbox } from './entities/strongbox.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StrongboxService {
  constructor(
    @InjectRepository(Strongbox)
    private strongboxRepository: Repository<Strongbox>,
  ) {}
  create(createStrongboxDto: CreateStrongboxDto) {
    return this.strongboxRepository.save(createStrongboxDto);
  }

  findAll() {
    return this.strongboxRepository.find({
      select: {
        id: true,
        name: true,
        currencyId: true,
        currency: {
          id: true,
          name: true,
        },
      },
      where: {
        active: true,
      },
      relations: ['currency'],
    });
  }

  findOne(id: number) {
    return this.strongboxRepository.findOne({
      select: {
        id: true,
        name: true,
        currencyId: true,
        currency: {
          id: true,
          name: true,
        },
      },
      where: { id, active: true },
      relations: ['currency'],
    });
  }

  update(id: number, updateStrongboxDto: UpdateStrongboxDto) {
    return this.strongboxRepository.update(id, updateStrongboxDto);
  }

  remove(id: number) {
    return this.strongboxRepository.delete(id);
  }
}
