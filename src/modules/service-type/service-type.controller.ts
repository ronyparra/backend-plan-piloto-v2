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
import { ServiceTypeService } from './service-type.service';
import { CreateServiceTypeDto } from './dto/create-service-type.dto';
import { UpdateServiceTypeDto } from './dto/update-service-type.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@Controller('service-type')
@ApiTags('service-type')
export class ServiceTypeController {
  constructor(private readonly serviceTypeService: ServiceTypeService) {}

  @Post()
  create(@Body() createServiceTypeDto: CreateServiceTypeDto) {
    return this.serviceTypeService.create(createServiceTypeDto);
  }

  @Get()
  findAll() {
    return this.serviceTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceTypeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateServiceTypeDto: UpdateServiceTypeDto,
  ) {
    return this.serviceTypeService.update(+id, updateServiceTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceTypeService.remove(+id);
  }
}
