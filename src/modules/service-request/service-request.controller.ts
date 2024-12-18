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
import { ServiceRequestService } from './service-request.service';
import {
  CreateServiceRequestDto,
  CreateServiceRequestDetailDto,
} from './dto/create-service-request.dto';
import { UpdateServiceRequestDto } from './dto/update-service-request.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { QueryStatusDto } from 'src/commons/query-status.dto';

@UseGuards(AuthGuard)
@ApiTags('service-request')
@Controller('service-request')
export class ServiceRequestController {
  constructor(private readonly serviceRequestService: ServiceRequestService) {}

  @Post()
  create(
    @Body() createServiceRequestDto: CreateServiceRequestDto,
    @Request() req,
  ) {
    createServiceRequestDto.userId = req.user.id;
    return this.serviceRequestService.create(createServiceRequestDto);
  }

  @Get()
  findAll(@Query() queryParams: QueryStatusDto) {
    return this.serviceRequestService.findAll(queryParams).then((data) => {
      return data.map((item) => ({
        ...item,
        budget_number: item.serviceBudgetRequestDetail.length
          ? item.serviceBudgetRequestDetail[0].serviceBudgetId
          : null,
      }));
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceRequestService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateServiceRequestDto: UpdateServiceRequestDto,
  ) {
    const detail: CreateServiceRequestDetailDto[] =
      updateServiceRequestDto.serviceRequestDetail;
    delete updateServiceRequestDto.serviceRequestDetail;

    await this.serviceRequestService.update(+id, updateServiceRequestDto);
    await this.serviceRequestService.updateDetail(+id, detail);
    return this.serviceRequestService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceRequestService.remove(+id);
  }
}
