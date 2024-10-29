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
import { ServiceDiagnosticService } from './service-diagnostic.service';
import {
  CreateServiceDiagnosticDto,
  CreateServiceBudgetDetailDto,
} from './dto/create-service-diagnostic.dto';
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
  async create(
    @Body() createServiceDiagnosticDto: CreateServiceDiagnosticDto,
    @Request() req,
  ) {
    createServiceDiagnosticDto.userId = req.user.id;
    const created = await this.serviceDiagnosticService.create(
      createServiceDiagnosticDto,
    );
    const detail = createServiceDiagnosticDto.serviceDiagnosticDetail.map(
      (item) => ({
        ...item,
        serviceDiagnosticId: created.id,
      }),
    );
    await this.serviceDiagnosticService.createDetail(detail);
    return this.serviceDiagnosticService.findOne(created.id);
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
  async update(
    @Param('id') id: string,
    @Body() updateServiceDiagnosticDto: UpdateServiceDiagnosticDto,
  ) {
    const detail: CreateServiceBudgetDetailDto[] =
      updateServiceDiagnosticDto.serviceDiagnosticDetail;

    delete updateServiceDiagnosticDto.serviceDiagnosticDetail;

    await this.serviceDiagnosticService.update(+id, updateServiceDiagnosticDto);
    await this.serviceDiagnosticService.updateDetail(+id, detail);
    return this.serviceDiagnosticService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceDiagnosticService.remove(+id);
  }
}
