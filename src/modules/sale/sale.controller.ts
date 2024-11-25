import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { DocumentLegal } from '../../commons/document-legal';
import { QueryStatusDto } from 'src/commons/query-status.dto';

@UseGuards(AuthGuard)
@ApiTags('sale')
@Controller('sale')
export class SaleController {
  constructor(
    private readonly saleService: SaleService,
    private readonly invoiceReport: DocumentLegal,
  ) {}

  @Post()
  create(@Body() createSaleDto: CreateSaleDto, @Request() req) {
    createSaleDto.userId = req.user.id;
    return this.saleService.create(createSaleDto);
  }

  @Get()
  findAll(@Query() queryParams: QueryStatusDto) {
    return this.saleService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleService.findOne(+id);
  }

  @Get('last-invoice-number/:id')
  findByStamping(@Param('id') id: number) {
    return this.saleService.findLastInvoiceNumber(id);
  }

  @Get('generate-invoice/:id')
  async generateInvoice(@Param('id') id: number) {
    const sale = await this.saleService.findOne(id);
    if (!sale) throw new Error('Sale not found');
    return this.invoiceReport.generateDocument(
      sale,
      'saleConcept',
      'invoice_number',
    );
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.saleService.update(+id, updateSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleService.remove(+id);
  }
}
