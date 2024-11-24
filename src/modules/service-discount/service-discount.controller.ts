import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ServiceDiscountService } from './service-discount.service';
import { CreateServiceDiscountDto } from './dto/create-service-discount.dto';
import { UpdateServiceDiscountDto } from './dto/update-service-discount.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { QueryStatusDto } from 'src/commons/query-status.dto';

@UseGuards(AuthGuard)
@ApiTags('service-discount')
@Controller('service-discount')
export class ServiceDiscountController {
  constructor(
    private readonly serviceDiscountService: ServiceDiscountService,
  ) {}

  @Post()
  create(@Body() createServiceDiscountDto: CreateServiceDiscountDto) {
    return this.serviceDiscountService.create(createServiceDiscountDto);
  }

  @Get()
  findAll(@Query() queryParams: QueryStatusDto) {
    return this.serviceDiscountService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceDiscountService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateServiceDiscountDto: UpdateServiceDiscountDto,
  ) {
    return this.serviceDiscountService.update(+id, updateServiceDiscountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceDiscountService.remove(+id);
  }
}
