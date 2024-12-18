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
import { CreditNotePurchaseService } from './credit-note-purchase.service';
import {
  CreateCreditNotePurchaseDto,
  CreditNotePurchaseDetailDto,
} from './dto/create-credit-note-purchase.dto';
import { UpdateCreditNotePurchaseDto } from './dto/update-credit-note-purchase.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { QueryStatusDto } from 'src/commons/query-status.dto';

@UseGuards(AuthGuard)
@ApiTags('purchase-credit-note')
@Controller('purchase-credit-note')
export class CreditNotePurchaseController {
  constructor(
    private readonly creditNotePurchaseService: CreditNotePurchaseService,
  ) {}

  @Post()
  create(
    @Body() createCreditNotePurchaseDto: CreateCreditNotePurchaseDto,
    @Request() req,
  ) {
    createCreditNotePurchaseDto.userId = req.user.id;
    return this.creditNotePurchaseService.create(createCreditNotePurchaseDto);
  }

  @Get()
  findAll(@Query() queryParams: QueryStatusDto) {
    return this.creditNotePurchaseService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creditNotePurchaseService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCreditNotePurchaseDto: UpdateCreditNotePurchaseDto,
  ) {
    const detail: CreditNotePurchaseDetailDto[] =
      updateCreditNotePurchaseDto.creditNotePurchaseDetail;

    delete updateCreditNotePurchaseDto.creditNotePurchaseDetail;
    await this.creditNotePurchaseService.update(
      +id,
      updateCreditNotePurchaseDto,
    );
    await this.creditNotePurchaseService.updateDetail(+id, detail);
    return this.creditNotePurchaseService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creditNotePurchaseService.remove(+id);
  }
}
