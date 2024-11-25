import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Sale } from './entities/sale.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QueryStatusDto } from 'src/commons/query-status.dto';
import { SalePedidoSale } from './entities/sale-pedido-sale.entity';
import { SaleServiceProvided } from './entities/sale-service-provided';

const query = {
  select: {
    id: true,
    date: true,
    invoice_number: true,
    observation: true,
    invoiceType: {
      id: true,
      name: true,
    },
    invoiceTypeId: true,
    customer: {
      id: true,
      name: true,
      social_reason: true,
      document: true,
      phone: true,
    },
    stamping: {
      id: true,
      name: true,
      number: true,
      start_date: true,
      end_date: true,
      establishment: {
        id: true,
        number: true,
        name: true,
      },
      expeditionPoint: {
        id: true,
        number: true,
        name: true,
      },
    },
    stampingId: true,
    customerId: true,
    user: {
      id: true,
      name: true,
    },
    userId: true,
    saleConcept: {
      saleId: true,
      concept: {
        id: true,
        name: true,
      },
      quantity: true,
      price: true,
      taxes: true,
    },
    active: true,
  },
  relations: {
    invoiceType: true,
    customer: true,
    user: true,
    stamping: {
      establishment: true,
      expeditionPoint: true,
    },
    saleConcept: {
      concept: true,
    },
  },
};
@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private saleRepository: Repository<Sale>,
    @InjectRepository(SalePedidoSale)
    private salePedidoSaleRepository: Repository<SalePedidoSale>,
    @InjectRepository(SaleServiceProvided)
    private saleServiceProvidedRepository: Repository<SaleServiceProvided>,
  ) {}
  create(createSaleDto: CreateSaleDto) {
    return this.saleRepository.save(createSaleDto);
  }

  findAll(queryStatus: QueryStatusDto) {
    return this.saleRepository.find({
      ...query,
      where: queryStatus,
      order: { id: 'DESC' },
    });
  }

  findOne(id: number) {
    return this.saleRepository.findOne({
      ...query,
      where: { id, active: true },
    });
  }

  async findLastInvoiceNumber(id: number) {
    const result = await this.saleRepository.findOne({
      select: ['invoice_number'],
      where: { active: true, stampingId: id },
      order: { id: 'DESC' },
    });
    if (result) {
      return { invoice_number: result.invoice_number + 1 };
    }
    return { invoice_number: 1 };
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return this.saleRepository.update(id, updateSaleDto);
  }

  async remove(id: number) {
    this.salePedidoSaleRepository.delete({ saleId: id });
    this.saleServiceProvidedRepository.delete({ saleId: id });
    return await this.saleRepository.update(id, { active: false });
  }
}
