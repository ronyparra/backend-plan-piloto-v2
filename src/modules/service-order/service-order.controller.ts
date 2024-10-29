import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ServiceOrderService } from './service-order.service';
import {
  CreateServiceOrderDto,
  ServiceOrderDetailDto,
} from './dto/create-service-order.dto';
import { UpdateServiceOrderDto } from './dto/update-service-order.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiTags('service-order')
@Controller('service-order')
export class ServiceOrderController {
  constructor(private readonly serviceOrderService: ServiceOrderService) {}

  @Post()
  create(@Body() createServiceOrderDto: CreateServiceOrderDto, @Request() req) {
    createServiceOrderDto.userId = req.user.id;
    return this.serviceOrderService.create(createServiceOrderDto);
  }

  @Get()
  findAll() {
    return this.serviceOrderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceOrderService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateServiceOrderDto: UpdateServiceOrderDto,
  ) {
    const detail: ServiceOrderDetailDto[] =
      updateServiceOrderDto.serviceOrderDetail;
    delete updateServiceOrderDto.serviceOrderDetail;
    await this.serviceOrderService.update(+id, updateServiceOrderDto);
    await this.serviceOrderService.updateDetail(+id, detail);
    return this.serviceOrderService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceOrderService.remove(+id);
  }
}
