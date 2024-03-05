import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Sale } from './entities/sale.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { chromium } from 'playwright';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private saleRepository: Repository<Sale>,
  ) {}
  create(createSaleDto: CreateSaleDto) {
    return this.saleRepository.save(createSaleDto);
  }

  findAll() {
    return this.saleRepository.find({
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
        },
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
        },
      },
      relations: {
        invoiceType: true,
        customer: true,
        user: true,
        saleConcept: {
          concept: true,
        },
      },
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.saleRepository.findOne({
      where: { id, active: true },
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
        },
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
        },
      },
      relations: {
        invoiceType: true,
        customer: true,
        user: true,
        saleConcept: {
          concept: true,
        },
      },
    });
  }

  async findLastInvoiceNumber(id: number) {
    const result = await this.saleRepository.findOne({
      select: ['invoice_number'],
      where: { active: true, stampingId: id },
      order: { id: 'DESC' },
    });
    if (result) {
      return result;
    }
    return { invoice_number: 1 };
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return this.saleRepository.update(id, updateSaleDto);
  }

  remove(id: number) {
    return this.saleRepository.softDelete(id);
  }

  async generateInvoice(id: number) {
    console.log('id', id);
    const A = 'invoice';
    const htmlContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    </head>
    <body>
    <h2>Approve Page ,${A}</h2>
    </body>
    </html>
    `;
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent);

    const buffer = await page.pdf({ format: 'A4' });
    const base64 = buffer.toString('base64');
    await browser.close();

    return `data:application/pdf;base64,${base64}`;
  }
}
