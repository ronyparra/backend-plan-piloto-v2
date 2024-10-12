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
import { ServiceContractService } from './service-contract.service';
import { CreateServiceContractDto } from './dto/create-service-contract.dto';
import { UpdateServiceContractDto } from './dto/update-service-contract.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiTags('service-contract')
@Controller('service-contract')
export class ServiceContractController {
  constructor(
    private readonly serviceContractService: ServiceContractService,
  ) {}

  @Post()
  create(@Body() createServiceContractDto: CreateServiceContractDto) {
    return this.serviceContractService.create(createServiceContractDto);
  }

  @Get()
  findAll() {
    return this.serviceContractService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceContractService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateServiceContractDto: UpdateServiceContractDto,
  ) {
    return this.serviceContractService.update(+id, updateServiceContractDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceContractService.remove(+id);
  }
}
