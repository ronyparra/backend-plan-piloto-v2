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
import { PurchaseBudgetService } from './purchase-budget.service';
import {
  CreatePurchaseBudgetDto,
  PurchaseBudgetDetailDto,
} from './dto/create-purchase-budget.dto';
import { UpdatePurchaseBudgetDto } from './dto/update-purchase-budget.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiTags('purchase-budget')
@Controller('purchase-budget')
export class PurchaseBudgetController {
  constructor(private readonly purchaseBudgetService: PurchaseBudgetService) {}

  @Post()
  create(
    @Body() createPurchaseBudgetDto: CreatePurchaseBudgetDto,
    @Request() req,
  ) {
    createPurchaseBudgetDto.userId = req.user.id;
    return this.purchaseBudgetService.create(createPurchaseBudgetDto);
  }

  @Get()
  findAll() {
    return this.purchaseBudgetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseBudgetService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePurchaseBudgetDto: UpdatePurchaseBudgetDto,
  ) {
    const detail: PurchaseBudgetDetailDto[] =
      updatePurchaseBudgetDto.purchaseBudgetDetail;

    delete updatePurchaseBudgetDto.purchaseBudgetDetail;
    await this.purchaseBudgetService.updateDetail(+id, detail);
    await this.purchaseBudgetService.update(+id, updatePurchaseBudgetDto);
    return this.purchaseBudgetService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseBudgetService.remove(+id);
  }
}
