import { Injectable } from '@nestjs/common';
import { CreateSaleDebitNoteDto } from './dto/create-sale-debit-note.dto';
import { UpdateSaleDebitNoteDto } from './dto/update-sale-debit-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QueryStatusDto } from 'src/commons/query-status.dto';
import { SaleDebitNote } from './entities/sale-debit-note.entity';

@Injectable()
export class SaleDebitNoteService {
  constructor(
    @InjectRepository(SaleDebitNote)
    private saleDebitNoteRepository: Repository<SaleDebitNote>,
  ) {}
  create(createSaleDebitNoteDto: CreateSaleDebitNoteDto) {
    return this.saleDebitNoteRepository.save(createSaleDebitNoteDto);
  }

  findAll(queryStatus: QueryStatusDto) {
    return this.saleDebitNoteRepository.find({
      select: {
        id: true,
        date: true,
        observation: true,
        debitNoteNumber: true,
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
        saleDebitNoteDetail: {
          conceptId: true,
          quantity: true,
          concept: {
            id: true,
            name: true,
          },
        },
        active: true,
      },
      relations: {
        user: true,
        customer: true,
        saleDebitNoteDetail: {
          concept: true,
        },
      },
      where: queryStatus,
    });
  }

  async findLastDebitNumber(id: number) {
    const result = await this.saleDebitNoteRepository.findOne({
      select: { debitNoteNumber: true },
      where: { active: true, stampingId: id },
      order: { id: 'DESC' },
    });
    if (result) {
      return { debitNoteNumber: result.debitNoteNumber + 1 };
    }
    return { debitNoteNumber: 1 };
  }

  findOne(id: number) {
    return this.saleDebitNoteRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateSaleDebitNoteDto: UpdateSaleDebitNoteDto) {
    return this.saleDebitNoteRepository.update(id, updateSaleDebitNoteDto);
  }

  remove(id: number) {
    return this.saleDebitNoteRepository.update(id, { active: false });
  }
}
