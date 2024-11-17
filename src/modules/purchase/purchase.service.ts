import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Purchase } from './entities/purchase.entity';
import { QueryStatusDto } from 'src/commons/query-status.dto';

const query = {
  select: {
    id: true,
    date: true,
    invoice_number: true,
    observation: true,
    stamping: true,
    invoiceType: {
      id: true,
      name: true,
    },
    invoiceTypeId: true,
    supplier: {
      id: true,
      name: true,
    },
    supplierId: true,
    user: {
      id: true,
      name: true,
    },
    userId: true,
    purchaseConcept: {
      purchaseId: true,
      concept: {
        id: true,
        name: true,
      },
      quantity: true,
      price: true,
      taxes: true,
    },
    purchaseOrderId: true,
    purchaseOrder: {
      id: true,
    },
    active: true,
  },
  relations: {
    invoiceType: true,
    supplier: true,
    user: true,
    purchaseConcept: {
      concept: true,
    },
    purchaseOrder: true,
  },
};

@Injectable()
export class PurchaseService {
  constructor(
    @InjectRepository(Purchase)
    private purchaseRepository: Repository<Purchase>,
  ) {}
  create(createPurchaseDto: CreatePurchaseDto) {
    return this.purchaseRepository.save(createPurchaseDto);
  }

  findAll(queryStatus: QueryStatusDto) {
    return this.purchaseRepository.find({
      select: {
        id: true,
        date: true,
        invoice_number: true,
        observation: true,
        stamping: true,
        invoiceType: {
          id: true,
          name: true,
        },
        invoiceTypeId: true,
        supplier: {
          id: true,
          name: true,
        },
        supplierId: true,
        user: {
          id: true,
          name: true,
        },
        userId: true,
        purchaseConcept: {
          purchaseId: true,
          concept: {
            id: true,
            name: true,
          },
          quantity: true,
          price: true,
          taxes: true,
        },
        purchaseMoneyBoxDetail: {
          purchaseId: true,
          strongboxId: true,
          amount: true,
        },
        purchaseOrderId: true,
        purchaseOrder: {
          id: true,
        },
        active: true,
      },
      relations: {
        invoiceType: true,
        supplier: true,
        user: true,
        purchaseConcept: {
          concept: true,
        },
        purchaseOrder: true,
        purchaseMoneyBoxDetail: true,
      },
      where: queryStatus,
    });
  }

  findOne(id: number) {
    return this.purchaseRepository.findOne({
      ...query,
      where: { id, active: true },
    });
  }

  remove(id: number) {
    return this.purchaseRepository.update(id, { active: false });
  }
}
