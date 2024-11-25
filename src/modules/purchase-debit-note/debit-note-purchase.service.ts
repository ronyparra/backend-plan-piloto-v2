import { Injectable } from '@nestjs/common';
import {
  CreateDebitNotePurchaseDto,
  DebitNotePurchaseDetailDto,
} from './dto/create-debit-note-purchase.dto';
import { UpdateDebitNotePurchaseDto } from './dto/update-debit-note-purchase.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DebitNotePurchase } from './entities/debit-note-purchase.entity';
import { DebitNotePurchaseDetail } from './entities/debit-note-purchase-detail.entity';

@Injectable()
export class DebitNotePurchaseService {
  constructor(
    @InjectRepository(DebitNotePurchase)
    private debitNotePurchaseRepository: Repository<DebitNotePurchase>,
    @InjectRepository(DebitNotePurchaseDetail)
    private debitNotePurchaseDetailRepository: Repository<DebitNotePurchaseDetail>,
  ) {}
  create(createDebitNotePurchaseDto: CreateDebitNotePurchaseDto) {
    return this.debitNotePurchaseRepository.save(createDebitNotePurchaseDto);
  }

  findAll() {
    return this.debitNotePurchaseRepository.find({
      select: {
        id: true,
        date: true,
        observation: true,
        timbrado: true,
        debitNoteNumber: true,
        user: {
          id: true,
          name: true,
        },
        userId: true,
        purchase: {
          id: true,
          invoice_number: true,
        },
        purchaseId: true,
        supplier: {
          id: true,
          name: true,
        },
        supplierId: true,
      },
      relations: {
        user: true,
        purchase: true,
        supplier: true,
        debitNotePurchaseDetail: {
          concept: true,
        },
      },
      where: {
        active: true,
      },
      order: { id: 'DESC' },
    });
  }

  findOne(id: number) {
    return this.debitNotePurchaseRepository.findOne({
      where: { active: true, id },
    });
  }

  async updateDetail(
    id: number,
    debitNotePurchaseDetailDto: DebitNotePurchaseDetailDto[],
  ) {
    const currentDetails = await this.debitNotePurchaseDetailRepository.find({
      where: { debitNotePurchaseId: id },
    });

    for (const detail of currentDetails) {
      if (
        !debitNotePurchaseDetailDto.find(
          (d) => d.conceptId === detail.conceptId,
        )
      ) {
        await this.debitNotePurchaseDetailRepository.delete({
          conceptId: detail.conceptId,
        });
      }
    }

    for (const detail of debitNotePurchaseDetailDto) {
      await this.debitNotePurchaseDetailRepository.save({
        ...detail,
        debitNotePurchaseId: id,
      });
    }
  }

  update(id: number, updateDebitNotePurchaseDto: UpdateDebitNotePurchaseDto) {
    return this.debitNotePurchaseRepository.save(updateDebitNotePurchaseDto);
  }

  remove(id: number) {
    return this.debitNotePurchaseRepository.update(id, { active: false });
  }
}
