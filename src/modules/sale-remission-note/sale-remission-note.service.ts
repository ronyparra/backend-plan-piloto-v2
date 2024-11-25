import { Injectable } from '@nestjs/common';
import { CreateSaleRemissionNoteDto } from './dto/create-sale-remission-note.dto';
import { UpdateSaleRemissionNoteDto } from './dto/update-sale-remission-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QueryStatusDto } from 'src/commons/query-status.dto';
import { SaleRemissionNote } from './entities/sale-remission-note.entity';

const query = {
  select: {
    id: true,
    date: true,
    observation: true,
    remissionNoteNumber: true,
    userId: true,
    user: {
      id: true,
      name: true,
    },
    customerId: true,
    customer: {
      id: true,
      name: true,
    },
    stampingId: true,
    stamping: {
      id: true,
      name: true,
      expeditionPoint: {
        number: true,
      },
      establishment: {
        number: true,
      },
    },
    saleId: true,
    sale: {
      id: true,
    },
    saleRemissionNoteDetail: {
      conceptId: true,
      quantity: true,
      price: true,
      concept: {
        id: true,
        name: true,
      },
      taxes: true,
    },
    active: true,
  },
  relations: {
    user: true,
    customer: true,
    sale: true,
    stamping: {
      establishment: true,
      expeditionPoint: true,
    },
    saleRemissionNoteDetail: {
      concept: true,
    },
  },
};

@Injectable()
export class SaleRemissionNoteService {
  constructor(
    @InjectRepository(SaleRemissionNote)
    private saleRemissionNoteRepository: Repository<SaleRemissionNote>,
  ) {}
  create(createSaleRemissionNoteDto: CreateSaleRemissionNoteDto) {
    return this.saleRemissionNoteRepository.save(createSaleRemissionNoteDto);
  }

  findAll(queryStatus: QueryStatusDto) {
    return this.saleRemissionNoteRepository.find({
      ...query,
      where: queryStatus,
      order: { id: 'DESC' },
    });
  }

  async findLastRemissionNumber(id: number) {
    const result = await this.saleRemissionNoteRepository.findOne({
      select: { remissionNoteNumber: true },
      where: { active: true, stampingId: id },
      order: { id: 'DESC' },
    });
    if (result) {
      return { remissionNoteNumber: result.remissionNoteNumber + 1 };
    }
    return { remissionNoteNumber: 1 };
  }

  findOne(id: number) {
    return this.saleRemissionNoteRepository.findOne({
      ...query,
      where: { id, active: true },
    });
  }

  update(id: number, updateSaleRemissionNoteDto: UpdateSaleRemissionNoteDto) {
    return this.saleRemissionNoteRepository.update(
      id,
      updateSaleRemissionNoteDto,
    );
  }

  remove(id: number) {
    return this.saleRemissionNoteRepository.update(id, { active: false });
  }
}
