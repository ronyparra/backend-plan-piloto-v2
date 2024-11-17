import { Injectable } from '@nestjs/common';
import {
  CreatePurchaseOrderDto,
  PurchaseOrderDetailDto,
} from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';
import { PurchaseOrderDetail } from './entities/purchase-order-detail.entity';
import { PurchaseOrder } from './entities/purchase-order.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryStatusDto } from 'src/commons/query-status.dto';

@Injectable()
export class PurchaseOrderService {
  constructor(
    @InjectRepository(PurchaseOrder)
    private purchaseOrderRepository: Repository<PurchaseOrder>,
    @InjectRepository(PurchaseOrderDetail)
    private purchaseOrderDetailRepository: Repository<PurchaseOrderDetail>,
  ) {}
  create(createPurchaseOrderDto: CreatePurchaseOrderDto) {
    return this.purchaseOrderRepository.save(createPurchaseOrderDto);
  }

  findAll(queryStatus: QueryStatusDto) {
    return this.purchaseOrderRepository.find({
      select: {
        id: true,
        date: true,
        observation: true,
        order_number: true,
        userId: true,
        user: {
          id: true,
          name: true,
        },
        supplierId: true,
        supplier: {
          id: true,
          name: true,
        },
        purchaseBudgetId: true,
        purchaseBudget: {
          id: true,
        },
        purchaseOrderDetail: {
          conceptId: true,
          quantity: true,
          price: true,
          concept: {
            id: true,
            name: true,
          },
        },
        purchase: {
          id: true,
          invoice_number: true,
        },
        active: true,
      },
      relations: {
        user: true,
        supplier: true,
        purchase: true,
        purchaseBudget: true,
        purchaseOrderDetail: {
          concept: true,
        },
      },
      where: queryStatus,
    });
  }

  findOne(id: number) {
    return this.purchaseOrderRepository.findOne({
      where: { id, active: true },
    });
  }

  async updateDetail(
    id: number,
    purchaseOrderDetail: PurchaseOrderDetailDto[],
  ) {
    const currentDetails = await this.purchaseOrderDetailRepository.find({
      where: { purchaseOrderId: id },
    });

    for (const detail of currentDetails) {
      if (!purchaseOrderDetail.find((d) => d.conceptId === detail.conceptId)) {
        await this.purchaseOrderDetailRepository.delete(detail.conceptId);
      }
    }

    for (const detail of purchaseOrderDetail) {
      await this.purchaseOrderDetailRepository.save({
        ...detail,
        purchaseOrderId: id,
      });
    }
  }

  update(id: number, updatePurchaseOrderDto: UpdatePurchaseOrderDto) {
    return this.purchaseOrderRepository.update(id, updatePurchaseOrderDto);
  }

  remove(id: number) {
    return this.purchaseOrderRepository.update(id, { active: false });
  }
}
