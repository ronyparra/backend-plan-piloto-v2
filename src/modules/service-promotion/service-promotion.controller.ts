import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ServicePromotionService } from './service-promotion.service';
import { CreateServicePromotionDto } from './dto/create-service-promotion.dto';
import { UpdateServicePromotionDto } from './dto/update-service-promotion.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { QueryStatusDto } from 'src/commons/query-status.dto';

@ApiTags('service-promotion')
@UseGuards(AuthGuard)
@Controller('service-promotion')
export class ServicePromotionController {
  constructor(
    private readonly servicePromotionService: ServicePromotionService,
  ) {}

  @Post()
  create(@Body() createServicePromotionDto: CreateServicePromotionDto) {
    return this.servicePromotionService.create(createServicePromotionDto);
  }

  @Get()
  findAll(@Query() queryParams: QueryStatusDto) {
    return this.servicePromotionService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicePromotionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateServicePromotionDto: UpdateServicePromotionDto,
  ) {
    return this.servicePromotionService.update(+id, updateServicePromotionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicePromotionService.remove(+id);
  }
}
