import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ServiceBudgetService } from './service-budget.service';
import {
  CreateServiceBudgetDto,
  ServiceBudgetDetailDto,
} from './dto/create-service-budget.dto';
import { UpdateServiceBudgetDto } from './dto/update-service-budget.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@Controller('service-budget')
@ApiTags('service-budget')
export class ServiceBudgetController {
  constructor(private readonly serviceBudgetService: ServiceBudgetService) {}

  @Post()
  create(@Body() createServiceBudgetDto: CreateServiceBudgetDto) {
    return this.serviceBudgetService.create(createServiceBudgetDto);
  }

  @Get()
  findAll() {
    return this.serviceBudgetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceBudgetService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateServiceBudgetDto: UpdateServiceBudgetDto,
  ) {
    const detail: ServiceBudgetDetailDto[] =
      updateServiceBudgetDto.serviceBudgetDetail;

    delete updateServiceBudgetDto.serviceBudgetDetail;

    await this.serviceBudgetService.update(+id, updateServiceBudgetDto);
    await this.serviceBudgetService.updateDetail(+id, detail);
    return this.serviceBudgetService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceBudgetService.remove(+id);
  }
}
