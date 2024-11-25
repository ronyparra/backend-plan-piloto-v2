import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
  Query,
} from '@nestjs/common';
import { SaleDebitNoteService } from './sale-debit-note.service';
import { CreateSaleDebitNoteDto } from './dto/create-sale-debit-note.dto';
import { UpdateSaleDebitNoteDto } from './dto/update-sale-debit-note.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { DocumentLegal } from '../../commons/document-legal';
import { QueryStatusDto } from 'src/commons/query-status.dto';

@UseGuards(AuthGuard)
@ApiTags('sale-debit-note')
@Controller('sale-debit-note')
export class SaleDebitNoteController {
  constructor(
    private readonly saleDebitNoteService: SaleDebitNoteService,
    private readonly documentLegal: DocumentLegal,
  ) {}

  @Post()
  create(
    @Body() createSaleDebitNoteDto: CreateSaleDebitNoteDto,
    @Request() req,
  ) {
    createSaleDebitNoteDto.userId = req.user.id;
    return this.saleDebitNoteService.create(createSaleDebitNoteDto);
  }

  @Get()
  findAll(@Query() queryParams: QueryStatusDto) {
    return this.saleDebitNoteService.findAll(queryParams);
  }

  @Get('last-debit-number/:id')
  findByStamping(@Param('id') id: number) {
    return this.saleDebitNoteService.findLastDebitNumber(id);
  }

  @Get('generate-document/:id')
  async generateDocument(@Param('id') id: number) {
    const result = await this.saleDebitNoteService.findOne(id);
    if (!result) throw new Error('Not found');
    return this.documentLegal.generateDocument(
      result,
      'saleDebitNoteDetail',
      'debitNoteNumber',
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleDebitNoteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleDebitNoteDto: UpdateSaleDebitNoteDto,
  ) {
    return this.saleDebitNoteService.update(+id, updateSaleDebitNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleDebitNoteService.remove(+id);
  }
}
