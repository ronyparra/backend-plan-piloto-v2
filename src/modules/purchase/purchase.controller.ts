import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { AccountToPayService } from '../account-to-pay/account-to-pay.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('purchase')
@ApiTags('purchase')
export class PurchaseController {
  constructor(
    private readonly purchaseService: PurchaseService,
    private readonly accountToPayService: AccountToPayService,
  ) {}

  @Post()
  async create(@Body() createPurchaseDto: CreatePurchaseDto, @Request() req) {
    // Asignar el usuario que realiza la compra
    createPurchaseDto.userId = req.user.id;

    // Asignar datos de la cuenta por pagar
    createPurchaseDto.accountToPay.userId = req.user.id;
    createPurchaseDto.accountToPay.date = createPurchaseDto.date;

    const purchaseData = createPurchaseDto;
    const accountToPayData = createPurchaseDto.accountToPay;
    // Eliminar la propiedad accountToPay del objeto purchaseData
    delete purchaseData.accountToPay;

    // Crear la compra
    const purchase = await this.purchaseService.create(purchaseData);

    // Si la compra es al contado, retornar la compra
    if (purchaseData.invoiceTypeId == 1) return purchase;

    // Si la compra es a crédito, asignar el id de la compra a cada cuenta por pagar
    const purchaseId = purchase.id;
    accountToPayData.purchaseId = purchaseId;
    const toPay = await this.accountToPayService.create(accountToPayData);
    return { ...purchase, accountToPay: toPay };
  }

  @Get()
  findAll() {
    return this.purchaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseService.remove(+id);
  }
}
