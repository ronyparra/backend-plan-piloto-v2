import { PartialType } from '@nestjs/swagger';
import { CreateSalePedidoDto } from './create-sale-pedido.dto';

export class UpdateSalePedidoDto extends PartialType(CreateSalePedidoDto) {}
