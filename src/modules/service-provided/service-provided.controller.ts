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
import { ServiceProvidedService } from './service-provided.service';
import {
  CreateServiceProvidedDto,
  ServiceProvidedDetailDto,
} from './dto/create-service-provided.dto';
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
  create(
    @Body() createServiceProvidedDto: CreateServiceProvidedDto,
    @Request() req,
  ) {
    createServiceProvidedDto.userId = req.user.id;
    console.log('createServiceProvidedDto', createServiceProvidedDto);
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
  async update(
    @Param('id') id: string,
    @Body() updateServiceProvidedDto: UpdateServiceProvidedDto,
  ) {
    const detail: ServiceProvidedDetailDto[] =
      updateServiceProvidedDto.serviceProvidedDetail;

    delete updateServiceProvidedDto.serviceProvidedDetail;

    await this.serviceProvidedService.update(+id, updateServiceProvidedDto);
    await this.serviceProvidedService.updateDetail(+id, detail);
    return this.serviceProvidedService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceProvidedService.remove(+id);
  }
}
