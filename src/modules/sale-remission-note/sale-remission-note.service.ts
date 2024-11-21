import { Injectable } from '@nestjs/common';
import { CreateSaleRemissionNoteDto } from './dto/create-sale-remission-note.dto';
import { UpdateSaleRemissionNoteDto } from './dto/update-sale-remission-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QueryStatusDto } from 'src/commons/query-status.dto';
import { SaleRemissionNote } from './entities/sale-remission-note.entity';

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
      select: {
        id: true,
        date: true,
        observation: true,
        remission_note_number: true,
        userId: true,
        user: {
          id: true,
          name: true,
        },
        stampingId: true,
        stamping: {
          id: true,
          name: true,
        },
        customerId: true,
        customer: {
          id: true,
          name: true,
        },
        saleRemissionNoteDetail: {
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
        stamping: true,
        customer: true,
        saleRemissionNoteDetail: {
          concept: true,
        },
      },
      where: queryStatus,
    });
  }

  findOne(id: number) {
    return this.saleRemissionNoteRepository.findOne({
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
