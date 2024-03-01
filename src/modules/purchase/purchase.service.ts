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
      relations: ['invoiceType', 'supplier', 'user', 'purchaseDetail'],
    });
  }

  findOne(id: number) {
    return this.purchaseRepository.findOne({
      where: { id },
      relations: ['invoiceType', 'supplier', 'user', 'purchaseDetail'],
    });
  }

  update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    return this.purchaseRepository.update(id, updatePurchaseDto);
  }

  remove(id: number) {
    return this.purchaseRepository.delete(id);
  }
}
