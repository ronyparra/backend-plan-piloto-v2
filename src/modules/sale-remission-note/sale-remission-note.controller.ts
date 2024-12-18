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
import { SaleRemissionNoteService } from './sale-remission-note.service';
import { CreateSaleRemissionNoteDto } from './dto/create-sale-remission-note.dto';
import { UpdateSaleRemissionNoteDto } from './dto/update-sale-remission-note.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { DocumentLegal } from '../../commons/document-legal';
import { QueryStatusDto } from 'src/commons/query-status.dto';

@UseGuards(AuthGuard)
@ApiTags('sale-remission-note')
@Controller('sale-remission-note')
export class SaleRemissionNoteController {
  constructor(
    private readonly saleRemissionNoteService: SaleRemissionNoteService,
    private readonly documentLegal: DocumentLegal,
  ) {}

  @Post()
  create(
    @Body() createSaleRemissionNoteDto: CreateSaleRemissionNoteDto,
    @Request() req,
  ) {
    createSaleRemissionNoteDto.userId = req.user.id;
    return this.saleRemissionNoteService.create(createSaleRemissionNoteDto);
  }

  @Get()
  findAll(@Query() queryParams: QueryStatusDto) {
    return this.saleRemissionNoteService.findAll(queryParams);
  }

  @Get('last-remission-number/:id')
  findByStamping(@Param('id') id: number) {
    return this.saleRemissionNoteService.findLastRemissionNumber(id);
  }

  @Get('generate-document/:id')
  async generateDocument(@Param('id') id: number) {
    const result = await this.saleRemissionNoteService.findOne(id);
    if (!result) throw new Error('Not found');
    return this.documentLegal.generateDocument(
      result,
      'saleRemissionNoteDetail',
      'remissionNoteNumber',
      'remission',
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleRemissionNoteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleRemissionNoteDto: UpdateSaleRemissionNoteDto,
  ) {
    return this.saleRemissionNoteService.update(
      +id,
      updateSaleRemissionNoteDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleRemissionNoteService.remove(+id);
  }
}
