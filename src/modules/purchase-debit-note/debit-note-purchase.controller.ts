import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Query,
  UseGuards,
} from '@nestjs/common';
import { DebitNotePurchaseService } from './debit-note-purchase.service';
import {
  CreateDebitNotePurchaseDto,
  DebitNotePurchaseDetailDto,
} from './dto/create-debit-note-purchase.dto';
import { UpdateDebitNotePurchaseDto } from './dto/update-debit-note-purchase.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { QueryStatusDto } from 'src/commons/query-status.dto';

@UseGuards(AuthGuard)
@ApiTags('purchase-debit-note')
@Controller('purchase-debit-note')
export class DebitNotePurchaseController {
  constructor(
    private readonly debitNotePurchaseService: DebitNotePurchaseService,
  ) {}

  @Post()
  create(
    @Body() createDebitNotePurchaseDto: CreateDebitNotePurchaseDto,
    @Request() req,
  ) {
    createDebitNotePurchaseDto.userId = req.user.id;
    return this.debitNotePurchaseService.create(createDebitNotePurchaseDto);
  }

  @Get()
  findAll(@Query() queryParams: QueryStatusDto) {
    return this.debitNotePurchaseService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.debitNotePurchaseService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDebitNotePurchaseDto: UpdateDebitNotePurchaseDto,
  ) {
    const detail: DebitNotePurchaseDetailDto[] =
      updateDebitNotePurchaseDto.debitNotePurchaseDetail;
    delete updateDebitNotePurchaseDto.debitNotePurchaseDetail;

    await this.debitNotePurchaseService.update(+id, updateDebitNotePurchaseDto);
    await this.debitNotePurchaseService.updateDetail(+id, detail);

    return this.debitNotePurchaseService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.debitNotePurchaseService.remove(+id);
  }
}
