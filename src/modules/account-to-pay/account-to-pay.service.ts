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
    return this.accountToPayRepository.find();
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
