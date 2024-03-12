import { Controller, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { AccountToPayService } from './account-to-pay.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@ApiTags('account-to-pay')
@Controller('account-to-pay')
export class AccountToPayController {
  constructor(private readonly accountToPayService: AccountToPayService) {}

  @Get()
  findAll() {
    return this.accountToPayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountToPayService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountToPayService.remove(+id);
  }
}
