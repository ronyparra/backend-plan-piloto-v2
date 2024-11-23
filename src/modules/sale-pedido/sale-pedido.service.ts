import { Injectable } from '@nestjs/common';
import {
  CreateSalePedidoDto,
  CreateSalePedidoDetailDto,
} from './dto/create-sale-pedido.dto';
import { UpdateSalePedidoDto } from './dto/update-sale-pedido.dto';
import { SalePedido } from './entities/sale-pedido.entity';
import { SalePedidoDetail } from './entities/sale-pedido-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QueryStatusDto } from 'src/commons/query-status.dto';

@Injectable()
export class SalePedidoService {
  constructor(
    @InjectRepository(SalePedido)
    private salePedidoRepository: Repository<SalePedido>,
    @InjectRepository(SalePedidoDetail)
    private salePedidoDetailRepository: Repository<SalePedidoDetail>,
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
        salePedidoNumber: true,
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
        salePedidoSale: true,
        customer: {
          id: true,
          name: true,
        },
        active: true,
      },
      relations: {
        user: true,
        salePedidoSale: true,
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

  async updateDetail(
    id: number,
    createSalePedidoDetailDto: CreateSalePedidoDetailDto[],
  ) {
    const currentDetails = await this.salePedidoDetailRepository.find({
      where: { salePedidoId: id },
    });

    for (const detail of currentDetails) {
      if (
        !createSalePedidoDetailDto.find((d) => d.conceptId === detail.conceptId)
      ) {
        await this.salePedidoDetailRepository.delete(detail.conceptId);
      }
    }

    for (const detail of createSalePedidoDetailDto) {
      await this.salePedidoDetailRepository.save({
        ...detail,
        salePedidoId: id,
      });
    }
  }

  remove(id: number) {
    return this.salePedidoRepository.delete(id);
  }
}
