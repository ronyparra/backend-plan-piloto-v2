import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerBranchService } from './customer-branch.service';
import { CreateCustomerBranchDto } from './dto/create-customer-branch.dto';
import { UpdateCustomerBranchDto } from './dto/update-customer-branch.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('customer-branch')
@ApiTags('customer-branch')
export class CustomerBranchController {
  constructor(private readonly customerBranchService: CustomerBranchService) {}

  @Post()
  create(@Body() createCustomerBranchDto: CreateCustomerBranchDto) {
    return this.customerBranchService.create(createCustomerBranchDto);
  }

  @Get()
  findAll() {
    return this.customerBranchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerBranchService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerBranchDto: UpdateCustomerBranchDto,
  ) {
    return this.customerBranchService.update(+id, updateCustomerBranchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerBranchService.remove(+id);
  }
}
