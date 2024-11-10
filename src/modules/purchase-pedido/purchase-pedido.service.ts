import { Injectable } from '@nestjs/common';
import {
  CreatePurchasePedidoDto,
  PurchasePedidoDetailDto,
} from './dto/create-purchase-pedido.dto';
import { UpdatePurchasePedidoDto } from './dto/update-purchase-pedido.dto';
import { PurchasePedido } from './entities/purchase-pedido.entity';
import { PurchasePedidoDetail } from './entities/purchase-pedido-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PurchasePedidoService {
  constructor(
    @InjectRepository(PurchasePedido)
    private purchasePedidoRepository: Repository<PurchasePedido>,
    @InjectRepository(PurchasePedidoDetail)
    private purchasePedidoDetailRepository: Repository<PurchasePedidoDetail>,
  ) {}
  create(createPurchasePedidoDto: CreatePurchasePedidoDto) {
    return this.purchasePedidoRepository.save(createPurchasePedidoDto);
  }

  findAll() {
    return this.purchasePedidoRepository.find({
      select: {
        id: true,
        date: true,
        observation: true,
        userId: true,
        user: {
          id: true,
          name: true,
        },
        purchasePedidoDetail: {
          conceptId: true,
          quantity: true,
          concept: {
            id: true,
            name: true,
          },
        },
      },
      relations: {
        user: true,
        purchasePedidoDetail: {
          concept: true,
        },
      },
      where: {
        active: true,
      },
    });
  }

  findOne(id: number) {
    return this.purchasePedidoRepository.findOne({
      where: { id, active: true },
    });
  }

  update(id: number, updatePurchasePedidoDto: UpdatePurchasePedidoDto) {
    return this.purchasePedidoRepository.update(id, updatePurchasePedidoDto);
  }

  async updateDetail(
    id: number,
    purchasePedidoDetail: PurchasePedidoDetailDto[],
  ) {
    const currentDetails = await this.purchasePedidoDetailRepository.find({
      where: { purchasePedidoId: id },
    });

    for (const detail of currentDetails) {
      if (!purchasePedidoDetail.find((d) => d.conceptId === detail.conceptId)) {
        await this.purchasePedidoDetailRepository.delete(detail.conceptId);
      }
    }

    for (const detail of purchasePedidoDetail) {
      await this.purchasePedidoDetailRepository.save({
        ...detail,
        purchasePedidoId: id,
      });
    }
  }

  remove(id: number) {
    return this.purchasePedidoRepository.delete(id);
  }
}
