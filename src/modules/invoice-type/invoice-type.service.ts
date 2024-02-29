import { Injectable } from '@nestjs/common';
import { CreateInvoiceTypeDto } from './dto/create-invoice-type.dto';
import { UpdateInvoiceTypeDto } from './dto/update-invoice-type.dto';
import { InvoiceType } from './entities/invoice-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InvoiceTypeService {
  constructor(
    @InjectRepository(InvoiceType)
    private invoiceTypeRepository: Repository<InvoiceType>,
  ) {}
  create(createInvoiceTypeDto: CreateInvoiceTypeDto) {
    return this.invoiceTypeRepository.save(createInvoiceTypeDto);
  }

  findAll() {
    return this.invoiceTypeRepository.find({
      select: ['id', 'name'],
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.invoiceTypeRepository.findOne({
      select: ['id', 'name'],
      where: { id, active: true },
    });
  }

  update(id: number, updateInvoiceTypeDto: UpdateInvoiceTypeDto) {
    return this.invoiceTypeRepository.update(id, updateInvoiceTypeDto);
  }

  remove(id: number) {
    return this.invoiceTypeRepository.delete(id);
  }
}
