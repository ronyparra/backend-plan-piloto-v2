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
import { SalePedidoService } from './sale-pedido.service';
import {
  CreateSalePedidoDto,
  CreateSalePedidoDetailDto,
} from './dto/create-sale-pedido.dto';
import { UpdateSalePedidoDto } from './dto/update-sale-pedido.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { QueryStatusDto } from 'src/commons/query-status.dto';
import { getDocumentNumber } from 'src/commons/document';

@UseGuards(AuthGuard)
@ApiTags('sale-pedido')
@Controller('sale-pedido')
export class SalePedidoController {
  constructor(private readonly salePedidoService: SalePedidoService) {}

  @Post()
  create(@Body() createSalePedidoDto: CreateSalePedidoDto, @Request() req) {
    createSalePedidoDto.userId = req.user.id;
    return this.salePedidoService.create(createSalePedidoDto);
  }

  @Get()
  async findAll(@Query() queryParams: QueryStatusDto) {
    const result = await this.salePedidoService.findAll(queryParams);
    return result.map((item) => {
      let document_number = null;
      if (item.salePedidoSale.length) {
        const sale = item.salePedidoSale[0].sale;
        document_number = getDocumentNumber(sale.stamping, sale.invoice_number);
      }
      return {
        ...item,
        invoice_number: document_number,
      };
    });
  }

  @Get('last-id')
  findLastId() {
    return this.salePedidoService.findLastId();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salePedidoService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSalePedidoDto: UpdateSalePedidoDto,
  ) {
    const detail: CreateSalePedidoDetailDto[] =
      updateSalePedidoDto.salePedidoDetail;
    delete updateSalePedidoDto.salePedidoDetail;

    await this.salePedidoService.update(+id, updateSalePedidoDto);
    await this.salePedidoService.updateDetail(+id, detail);
    return this.salePedidoService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salePedidoService.remove(+id);
  }
}
