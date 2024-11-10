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
} from '@nestjs/common';
import { CreditNotePurchaseService } from './credit-note-purchase.service';
import {
  CreateCreditNotePurchaseDto,
  CreditNotePurchaseDetailDto,
} from './dto/create-credit-note-purchase.dto';
import { UpdateCreditNotePurchaseDto } from './dto/update-credit-note-purchase.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiTags('credit-note-purchase')
@Controller('credit-note-purchase')
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
  findAll() {
    return this.creditNotePurchaseService.findAll();
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
