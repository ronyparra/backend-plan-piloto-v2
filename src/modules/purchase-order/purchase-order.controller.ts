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
import { PurchaseOrderService } from './purchase-order.service';
import {
  CreatePurchaseOrderDto,
  PurchaseOrderDetailDto,
} from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiTags('purchase-order')
@Controller('purchase-order')
export class PurchaseOrderController {
  constructor(private readonly purchaseOrderService: PurchaseOrderService) {}

  @Post()
  create(
    @Body() createPurchaseOrderDto: CreatePurchaseOrderDto,
    @Request() req,
  ) {
    createPurchaseOrderDto.userId = req.user.id;
    return this.purchaseOrderService.create(createPurchaseOrderDto);
  }

  @Get()
  findAll() {
    return this.purchaseOrderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseOrderService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePurchaseOrderDto: UpdatePurchaseOrderDto,
  ) {
    const detail: PurchaseOrderDetailDto[] =
      updatePurchaseOrderDto.purchaseOrderDetail;
    delete updatePurchaseOrderDto.purchaseOrderDetail;
    await this.purchaseOrderService.update(+id, updatePurchaseOrderDto);
    await this.purchaseOrderService.updateDetail(+id, detail);
    return this.purchaseOrderService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseOrderService.remove(+id);
  }
}
