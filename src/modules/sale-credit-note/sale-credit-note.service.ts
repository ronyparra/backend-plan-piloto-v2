import { Injectable } from '@nestjs/common';
import { CreateSaleCreditNoteDto } from './dto/create-sale-credit-note.dto';
import { UpdateSaleCreditNoteDto } from './dto/update-sale-credit-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QueryStatusDto } from 'src/commons/query-status.dto';
import { SaleCreditNote } from './entities/sale-credit-note.entity';

const query = {
  select: {
    id: true,
    date: true,
    observation: true,
    creditNoteNumber: true,
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
    saleCreditNoteDetail: {
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
    saleCreditNoteDetail: {
      concept: true,
    },
  },
};

@Injectable()
export class SaleCreditNoteService {
  constructor(
    @InjectRepository(SaleCreditNote)
    private saleCreditNoteRepository: Repository<SaleCreditNote>,
  ) {}
  create(createSaleCreditNoteDto: CreateSaleCreditNoteDto) {
    return this.saleCreditNoteRepository.save(createSaleCreditNoteDto);
  }

  findAll(queryStatus: QueryStatusDto) {
    return this.saleCreditNoteRepository.find({
      ...query,
      where: queryStatus,
      order: { id: 'DESC' },
    });
  }

  async findLastCreditNumber(id: number) {
    const result = await this.saleCreditNoteRepository.findOne({
      select: { creditNoteNumber: true },
      where: { active: true, stampingId: id },
      order: { id: 'DESC' },
    });
    if (result) {
      return { creditNoteNumber: result.creditNoteNumber + 1 };
    }
    return { creditNoteNumber: 1 };
  }

  findOne(id: number) {
    return this.saleCreditNoteRepository.findOne({
      ...query,
      where: { id },
    });
  }

  update(id: number, updateSaleCreditNoteDto: UpdateSaleCreditNoteDto) {
    return this.saleCreditNoteRepository.update(id, updateSaleCreditNoteDto);
  }

  remove(id: number) {
    return this.saleCreditNoteRepository.update(id, { active: false });
  }
}
