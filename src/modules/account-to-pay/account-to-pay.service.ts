import { Injectable } from '@nestjs/common';
import { CreateAccountToPayDto } from './dto/create-account-to-pay.dto';
import { AccountToPay } from './entities/account-to-pay.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AccountToPayService {
  constructor(
    @InjectRepository(AccountToPay)
    private accountToPayRepository: Repository<AccountToPay>,
  ) {}
  create(createAccountToPayDto: CreateAccountToPayDto) {
    return this.accountToPayRepository.save(createAccountToPayDto);
  }

  findAll() {
    return this.accountToPayRepository.find({
      select: {
        id: true,
        date: true,
        userId: true,
        user: {
          id: true,
          name: true,
        },
        accountToPayDetail: {
          due_date: true,
          amount: true,
          paid: true,
          id: true,
        },
        purchase: {
          id: true,
          date: true,
          invoice_number: true,
          stamping: true,
          supplier: {
            id: true,
            name: true,
          },
        },
      },
      relations: {
        user: true,
        purchase: {
          supplier: true,
        },
        accountToPayDetail: true,
      },
    });
  }

  findOne(id: number) {
    return this.accountToPayRepository.findOne({
      where: { id },
    });
  }

  remove(id: number) {
    return this.accountToPayRepository.delete(id);
  }
}
