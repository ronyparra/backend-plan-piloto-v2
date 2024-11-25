import { Injectable } from '@nestjs/common';
import {
  CreateCreditNotePurchaseDto,
  CreditNotePurchaseDetailDto,
} from './dto/create-credit-note-purchase.dto';
import { UpdateCreditNotePurchaseDto } from './dto/update-credit-note-purchase.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreditNotePurchase } from './entities/credit-note-purchase.entity';
import { CreditNotePurchaseDetail } from './entities/credit-note-purchase-detail.entity';

@Injectable()
export class CreditNotePurchaseService {
  constructor(
    @InjectRepository(CreditNotePurchase)
    private creditNotePurchaseRepository: Repository<CreditNotePurchase>,
    @InjectRepository(CreditNotePurchaseDetail)
    private creditNotePurchaseDetailRepository: Repository<CreditNotePurchaseDetail>,
  ) {}
  create(createCreditNotePurchaseDto: CreateCreditNotePurchaseDto) {
    return this.creditNotePurchaseRepository.save(createCreditNotePurchaseDto);
  }

  findAll() {
    return this.creditNotePurchaseRepository.find({
      select: {
        id: true,
        date: true,
        observation: true,
        timbrado: true,
        creditNoteNumber: true,
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
        creditNotePurchaseDetail: {
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
    return this.creditNotePurchaseRepository.findOne({
      where: { active: true, id },
    });
  }

  async updateDetail(
    id: number,
    creditNotePurchaseDetailDto: CreditNotePurchaseDetailDto[],
  ) {
    const currentDetails = await this.creditNotePurchaseDetailRepository.find({
      where: { creditNotePurchaseId: id },
    });

    for (const detail of currentDetails) {
      if (
        !creditNotePurchaseDetailDto.find(
          (d) => d.conceptId === detail.conceptId,
        )
      ) {
        await this.creditNotePurchaseDetailRepository.delete(detail.conceptId);
      }
    }

    for (const detail of creditNotePurchaseDetailDto) {
      await this.creditNotePurchaseDetailRepository.save({
        ...detail,
        creditNotePurchaseId: id,
      });
    }
  }

  update(id: number, updateCreditNotePurchaseDto: UpdateCreditNotePurchaseDto) {
    return this.creditNotePurchaseRepository.update(
      id,
      updateCreditNotePurchaseDto,
    );
  }

  remove(id: number) {
    return this.creditNotePurchaseRepository.update(id, { active: false });
  }
}
