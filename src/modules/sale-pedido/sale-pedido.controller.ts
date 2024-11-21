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
import { CreateSalePedidoDto } from './dto/create-sale-pedido.dto';
import { UpdateSalePedidoDto } from './dto/update-sale-pedido.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { QueryStatusDto } from 'src/commons/query-status.dto';

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
  findAll(@Query() queryParams: QueryStatusDto) {
    return this.salePedidoService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salePedidoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSalePedidoDto: UpdateSalePedidoDto,
  ) {
    return this.salePedidoService.update(+id, updateSalePedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salePedidoService.remove(+id);
  }
}
