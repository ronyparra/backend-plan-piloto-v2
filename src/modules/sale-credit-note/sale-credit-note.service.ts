import { Injectable } from '@nestjs/common';
import { CreateSaleCreditNoteDto } from './dto/create-sale-credit-note.dto';
import { UpdateSaleCreditNoteDto } from './dto/update-sale-credit-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QueryStatusDto } from 'src/commons/query-status.dto';
import { SaleCreditNote } from './entities/sale-credit-note.entity';

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
      select: {
        id: true,
        date: true,
        observation: true,
        credit_note_number: true,
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
        saleCreditNoteDetail: {
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
        saleCreditNoteDetail: {
          concept: true,
        },
      },
      where: queryStatus,
    });
  }

  findOne(id: number) {
    return this.saleCreditNoteRepository.findOne({
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
