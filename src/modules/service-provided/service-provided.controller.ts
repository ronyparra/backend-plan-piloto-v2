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
import { ServiceProvidedService } from './service-provided.service';
import {
  CreateServiceProvidedDto,
  ServiceProvidedDetailDto,
} from './dto/create-service-provided.dto';
import { UpdateServiceProvidedDto } from './dto/update-service-provided.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { QueryStatusDto } from 'src/commons/query-status.dto';
import { getDocumentNumber } from 'src/commons/document';

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
  async findAll(@Query() queryParams: QueryStatusDto) {
    const result = await this.serviceProvidedService.findAll(queryParams);
    return result.map((item) => {
      let document_number = null;
      if (item.saleServiceProvided.length) {
        const sale = item.saleServiceProvided[0].sale;
        document_number = getDocumentNumber(sale.stamping, sale.invoice_number);
      }
      return {
        ...item,
        invoice_number: document_number,
      };
    });
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
