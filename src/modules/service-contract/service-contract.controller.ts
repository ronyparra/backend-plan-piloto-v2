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
  Query,
} from '@nestjs/common';
import { ServiceContractService } from './service-contract.service';
import {
  CreateServiceContractDto,
  ServiceContractDetailDto,
} from './dto/create-service-contract.dto';
import { UpdateServiceContractDto } from './dto/update-service-contract.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { QueryStatusDto } from 'src/commons/query-status.dto';

@UseGuards(AuthGuard)
@ApiTags('service-contract')
@Controller('service-contract')
export class ServiceContractController {
  constructor(
    private readonly serviceContractService: ServiceContractService,
  ) {}

  @Post()
  create(
    @Body() createServiceContractDto: CreateServiceContractDto,
    @Request() req,
  ) {
    createServiceContractDto.userId = req.user.id;
    return this.serviceContractService.create(createServiceContractDto);
  }

  @Get()
  findAll(@Query() queryParams: QueryStatusDto) {
    return this.serviceContractService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceContractService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateServiceContractDto: UpdateServiceContractDto,
  ) {
    const detail: ServiceContractDetailDto[] =
      updateServiceContractDto.serviceContractClausule;

    delete updateServiceContractDto.serviceContractClausule;

    await this.serviceContractService.updateDetail(+id, detail);
    await this.serviceContractService.update(+id, updateServiceContractDto);
    return this.serviceContractService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceContractService.remove(+id);
  }
}
