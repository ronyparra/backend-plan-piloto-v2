import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Purchase } from './entities/purchase.entity';

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
        },
        taxes: true,
      },
      relations: {
        invoiceType: true,
        supplier: true,
        user: true,
        purchaseConcept: {
          concept: true,
        },
      },
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.purchaseRepository.findOne({
      where: { id, active: true },
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
        supplier: {
          id: true,
          name: true,
        },
        user: {
          id: true,
          name: true,
        },
        purchaseConcept: {
          purchaseId: true,
          concept: {
            id: true,
            name: true,
          },
          quantity: true,
          price: true,
        },
        taxes: true,
      },
      relations: {
        invoiceType: true,
        supplier: true,
        user: true,
        purchaseConcept: {
          concept: true,
        },
      },
    });
  }

  update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    return this.purchaseRepository.update(id, updatePurchaseDto);
  }

  remove(id: number) {
    return this.purchaseRepository.delete(id);
  }
}
