import { PartialType } from '@nestjs/swagger';
import { CreatePurchasePedidoDto } from './create-purchase-pedido.dto';

export class UpdatePurchasePedidoDto extends PartialType(
  CreatePurchasePedidoDto,
) {}
