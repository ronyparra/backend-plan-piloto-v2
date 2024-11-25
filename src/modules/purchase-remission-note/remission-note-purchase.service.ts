import { Injectable } from '@nestjs/common';
import {
  CreateRemissionNotePurchaseDto,
  RemissionNotePurchaseDetailDto,
} from './dto/create-remission-note-purchase.dto';
import { UpdateRemissionNotePurchaseDto } from './dto/update-remission-note-purchase.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RemissionNotePurchase } from './entities/remission-note-purchase.entity';
import { RemissionNotePurchaseDetail } from './entities/remission-note-purchase-detail.entity';

@Injectable()
export class RemissionNotePurchaseService {
  constructor(
    @InjectRepository(RemissionNotePurchase)
    private remissionNotePurchaseRepository: Repository<RemissionNotePurchase>,
    @InjectRepository(RemissionNotePurchaseDetail)
    private remissionNotePurchaseDetailRepository: Repository<RemissionNotePurchaseDetail>,
  ) {}
  create(createRemissionNotePurchaseDto: CreateRemissionNotePurchaseDto) {
    return this.remissionNotePurchaseRepository.save(
      createRemissionNotePurchaseDto,
    );
  }

  findAll() {
    return this.remissionNotePurchaseRepository.find({
      select: {
        id: true,
        date: true,
        observation: true,
        timbrado: true,
        remissionNoteNumber: true,
        userId: true,
        purchaseId: true,
        supplierId: true,
      },
      relations: {
        user: true,
        supplier: true,
        purchase: true,
        remissionNotePurchaseDetail: {
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
    return this.remissionNotePurchaseRepository.findOne({
      where: { id, active: true },
    });
  }

  async updateDetail(
    id: number,
    remissionNotePurchaseDetailDto: RemissionNotePurchaseDetailDto[],
  ) {
    const currentDetails =
      await this.remissionNotePurchaseDetailRepository.find({
        where: { remissionNotePurchaseId: id },
      });

    for (const detail of currentDetails) {
      if (
        !remissionNotePurchaseDetailDto.find(
          (d) => d.conceptId === detail.conceptId,
        )
      ) {
        await this.remissionNotePurchaseDetailRepository.delete(
          detail.conceptId,
        );
      }
    }

    for (const detail of remissionNotePurchaseDetailDto) {
      await this.remissionNotePurchaseDetailRepository.save({
        ...detail,
        creditNotePurchaseId: id,
      });
    }
  }

  update(
    id: number,
    updateRemissionNotePurchaseDto: UpdateRemissionNotePurchaseDto,
  ) {
    return this.remissionNotePurchaseRepository.update(
      id,
      updateRemissionNotePurchaseDto,
    );
  }

  remove(id: number) {
    return this.remissionNotePurchaseRepository.update(id, { active: false });
  }
}
