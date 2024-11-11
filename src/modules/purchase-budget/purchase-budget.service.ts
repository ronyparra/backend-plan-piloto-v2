import { Injectable } from '@nestjs/common';
import {
  CreatePurchaseBudgetDto,
  PurchaseBudgetDetailDto,
} from './dto/create-purchase-budget.dto';
import { UpdatePurchaseBudgetDto } from './dto/update-purchase-budget.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchaseBudget } from './entities/purchase-budget.entity';
import { PurchaseBudgetDetail } from './entities/purchase-budget-detail.entity';

@Injectable()
export class PurchaseBudgetService {
  constructor(
    @InjectRepository(PurchaseBudget)
    private purchaseBudgetRepository: Repository<PurchaseBudget>,
    @InjectRepository(PurchaseBudgetDetail)
    private purchaseBudgetDetailRepository: Repository<PurchaseBudgetDetail>,
  ) {}
  create(createPurchaseBudgetDto: CreatePurchaseBudgetDto) {
    return this.purchaseBudgetRepository.save(createPurchaseBudgetDto);
  }

  findAll() {
    return this.purchaseBudgetRepository.find({
      select: {
        id: true,
        date: true,
        observation: true,
        userId: true,
        user: {
          id: true,
          name: true,
        },
        supplier: {
          id: true,
          name: true,
        },
        supplierId: true,
        purchasePedido: {
          id: true,
          date: true,
        },
        purchasePedidoId: true,
        purchaseBudgetDetail: {
          conceptId: true,
          quantity: true,
          price: true,
          concept: {
            id: true,
            name: true,
          },
        },
      },
      relations: {
        user: true,
        supplier: true,
        purchasePedido: true,
        purchaseBudgetDetail: {
          concept: true,
        },
      },
      where: {
        active: true,
      },
    });
  }

  findOne(id: number) {
    return this.purchaseBudgetRepository.findOne({
      where: { id, active: true },
    });
  }

  async updateDetail(
    id: number,
    purchaseBudgetDetail: PurchaseBudgetDetailDto[],
  ) {
    const currentDetails = await this.purchaseBudgetDetailRepository.find({
      where: { purchaseBudgetId: id },
    });

    for (const detail of currentDetails) {
      if (!purchaseBudgetDetail.find((d) => d.conceptId === detail.conceptId)) {
        await this.purchaseBudgetDetailRepository.delete(detail.conceptId);
      }
    }

    for (const detail of purchaseBudgetDetail) {
      await this.purchaseBudgetDetailRepository.save({
        ...detail,
        purchaseBudgetId: id,
      });
    }
  }

  update(id: number, updatePurchaseBudgetDto: UpdatePurchaseBudgetDto) {
    return this.purchaseBudgetRepository.update(id, updatePurchaseBudgetDto);
  }

  remove(id: number) {
    return this.purchaseBudgetRepository.update(id, { active: false });
  }
}
