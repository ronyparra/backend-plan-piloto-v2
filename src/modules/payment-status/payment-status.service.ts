import { Injectable } from '@nestjs/common';
import { CreatePaymentStatusDto } from './dto/create-payment-status.dto';
import { UpdatePaymentStatusDto } from './dto/update-payment-status.dto';
import { PaymentStatus } from './entities/payment-status.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentStatusService {
  constructor(
    @InjectRepository(PaymentStatus)
    private paymentStatusRepository: Repository<PaymentStatus>,
  ) {}
  create(createPaymentStatusDto: CreatePaymentStatusDto) {
    return this.paymentStatusRepository.save(createPaymentStatusDto);
  }

  findAll() {
    return this.paymentStatusRepository.find({
      select: ['id', 'name'],
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.paymentStatusRepository.findOne({
      select: ['id', 'name'],
      where: { id: id, active: true },
    });
  }

  update(id: number, updatePaymentStatusDto: UpdatePaymentStatusDto) {
    return this.paymentStatusRepository.update(id, updatePaymentStatusDto);
  }

  remove(id: number) {
    return this.paymentStatusRepository.update(id, { active: false });
  }
}
