import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Purchase } from './entities/purchase.entity';

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
  },
  relations: {
    invoiceType: true,
    supplier: true,
    user: true,
    purchaseConcept: {
      concept: true,
    },
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

  findAll() {
    return this.purchaseRepository.find({
      ...query,
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.purchaseRepository.findOne({
      ...query,
      where: { id, active: true },
    });
  }

  update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    return this.purchaseRepository.update(id, updatePurchaseDto);
  }

  remove(id: number) {
    return this.purchaseRepository.delete(id);
  }
}
