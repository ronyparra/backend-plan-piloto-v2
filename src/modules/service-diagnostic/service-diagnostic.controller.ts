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
import { ServiceDiagnosticService } from './service-diagnostic.service';
import { CreateServiceDiagnosticDto } from './dto/create-service-diagnostic.dto';
import { UpdateServiceDiagnosticDto } from './dto/update-service-diagnostic.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiTags('service-diagnostic')
@Controller('service-diagnostic')
export class ServiceDiagnosticController {
  constructor(
    private readonly serviceDiagnosticService: ServiceDiagnosticService,
  ) {}

  @Post()
  create(@Body() createServiceDiagnosticDto: CreateServiceDiagnosticDto) {
    return this.serviceDiagnosticService.create(createServiceDiagnosticDto);
  }

  @Get()
  findAll() {
    return this.serviceDiagnosticService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceDiagnosticService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateServiceDiagnosticDto: UpdateServiceDiagnosticDto,
  ) {
    return this.serviceDiagnosticService.update(
      +id,
      updateServiceDiagnosticDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceDiagnosticService.remove(+id);
  }
}
