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
import { ServiceProvidedService } from './service-provided.service';
import { CreateServiceProvidedDto } from './dto/create-service-provided.dto';
import { UpdateServiceProvidedDto } from './dto/update-service-provided.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiTags('service-provided')
@Controller('service-provided')
export class ServiceProvidedController {
  constructor(
    private readonly serviceProvidedService: ServiceProvidedService,
  ) {}

  @Post()
  create(@Body() createServiceProvidedDto: CreateServiceProvidedDto) {
    return this.serviceProvidedService.create(createServiceProvidedDto);
  }

  @Get()
  findAll() {
    return this.serviceProvidedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceProvidedService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateServiceProvidedDto: UpdateServiceProvidedDto,
  ) {
    return this.serviceProvidedService.update(+id, updateServiceProvidedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceProvidedService.remove(+id);
  }
}
