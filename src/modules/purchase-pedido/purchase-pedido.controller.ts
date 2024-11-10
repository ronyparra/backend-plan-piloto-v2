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
import { PurchasePedidoService } from './purchase-pedido.service';
import { CreatePurchasePedidoDto } from './dto/create-purchase-pedido.dto';
import { UpdatePurchasePedidoDto } from './dto/update-purchase-pedido.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { PurchasePedidoDetailDto } from './dto/create-purchase-pedido.dto';

@UseGuards(AuthGuard)
@ApiTags('purchase-pedido')
@Controller('purchase-pedido')
export class PurchasePedidoController {
  constructor(private readonly purchasePedidoService: PurchasePedidoService) {}

  @Post()
  create(
    @Body() createPurchasePedidoDto: CreatePurchasePedidoDto,
    @Request() req,
  ) {
    createPurchasePedidoDto.userId = req.user.id;
    return this.purchasePedidoService.create(createPurchasePedidoDto);
  }

  @Get()
  findAll() {
    return this.purchasePedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchasePedidoService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePurchasePedidoDto: UpdatePurchasePedidoDto,
  ) {
    const detail: PurchasePedidoDetailDto[] =
      updatePurchasePedidoDto.purchasePedidoDetail;
    delete updatePurchasePedidoDto.purchasePedidoDetail;
    await this.purchasePedidoService.update(+id, updatePurchasePedidoDto);
    await this.purchasePedidoService.updateDetail(+id, detail);
    return this.purchasePedidoService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchasePedidoService.remove(+id);
  }
}
