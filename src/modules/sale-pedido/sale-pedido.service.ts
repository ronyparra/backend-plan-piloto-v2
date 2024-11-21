import { Injectable } from '@nestjs/common';
import { CreateSalePedidoDto } from './dto/create-sale-pedido.dto';
import { UpdateSalePedidoDto } from './dto/update-sale-pedido.dto';
import { SalePedido } from './entities/sale-pedido.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QueryStatusDto } from 'src/commons/query-status.dto';

@Injectable()
export class SalePedidoService {
  constructor(
    @InjectRepository(SalePedido)
    private salePedidoRepository: Repository<SalePedido>,
  ) {}
  create(createSalePedidoDto: CreateSalePedidoDto) {
    return this.salePedidoRepository.save(createSalePedidoDto);
  }

  findAll(queryStatus: QueryStatusDto) {
    return this.salePedidoRepository.find({
      select: {
        id: true,
        date: true,
        observation: true,
        userId: true,
        sale_pedido_number: true,
        user: {
          id: true,
          name: true,
        },
        salePedidoDetail: {
          conceptId: true,
          quantity: true,
          concept: {
            id: true,
            name: true,
          },
        },
        customer: {
          id: true,
          name: true,
        },
        active: true,
      },
      relations: {
        user: true,
        salePedidoDetail: {
          concept: true,
        },
        customer: true,
      },
      where: queryStatus,
    });
  }

  findOne(id: number) {
    return this.salePedidoRepository.findOne({
      where: { id, active: true },
    });
  }

  update(id: number, updateSalePedidoDto: UpdateSalePedidoDto) {
    return this.salePedidoRepository.update(id, updateSalePedidoDto);
  }

  remove(id: number) {
    return this.salePedidoRepository.update(id, { active: false });
  }
}
