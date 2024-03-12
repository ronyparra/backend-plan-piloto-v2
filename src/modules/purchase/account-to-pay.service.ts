import { Injectable } from '@nestjs/common';
import { CreateAccountToPayDto } from './dto/create-account-to-pay.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountToPay } from './entities/account-to-pay';

@Injectable()
export class AccountToPayService {
  constructor(
    @InjectRepository(AccountToPay)
    private accountToPayRepository: Repository<AccountToPay>,
  ) {}
  create(createAccountToPayDto: CreateAccountToPayDto) {
    return this.accountToPayRepository.save(createAccountToPayDto);
  }
}
