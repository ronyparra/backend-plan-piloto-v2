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
import { SaleCreditNoteService } from './sale-credit-note.service';
import { CreateSaleCreditNoteDto } from './dto/create-sale-credit-note.dto';
import { UpdateSaleCreditNoteDto } from './dto/update-sale-credit-note.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { QueryStatusDto } from 'src/commons/query-status.dto';
import { DocumentLegal } from '../../commons/document-legal';

@UseGuards(AuthGuard)
@ApiTags('sale-credit-note')
@Controller('sale-credit-note')
export class SaleCreditNoteController {
  constructor(
    private readonly saleCreditNoteService: SaleCreditNoteService,
    private readonly documentLegal: DocumentLegal,
  ) {}

  @Post()
  create(
    @Body() createSaleCreditNoteDto: CreateSaleCreditNoteDto,
    @Request() req,
  ) {
    createSaleCreditNoteDto.userId = req.user.id;
    return this.saleCreditNoteService.create(createSaleCreditNoteDto);
  }

  @Get()
  findAll(@Query() queryParams: QueryStatusDto) {
    return this.saleCreditNoteService.findAll(queryParams);
  }

  @Get('last-credit-number/:id')
  findByStamping(@Param('id') id: number) {
    return this.saleCreditNoteService.findLastCreditNumber(id);
  }

  @Get('generate-document/:id')
  async generateDocument(@Param('id') id: number) {
    const result = await this.saleCreditNoteService.findOne(id);
    if (!result) throw new Error('Not found');
    return this.documentLegal.generateDocument(
      result,
      'saleCreditNoteDetail',
      'creditNoteNumber',
      'credit',
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleCreditNoteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleCreditNoteDto: UpdateSaleCreditNoteDto,
  ) {
    return this.saleCreditNoteService.update(+id, updateSaleCreditNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleCreditNoteService.remove(+id);
  }
}
