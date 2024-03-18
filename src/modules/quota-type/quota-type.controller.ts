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
import { QuotaTypeService } from './quota-type.service';
import { CreateQuotaTypeDto } from './dto/create-quota-type.dto';
import { UpdateQuotaTypeDto } from './dto/update-quota-type.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@ApiTags('quota-type')
@Controller('quota-type')
export class QuotaTypeController {
  constructor(private readonly quotaTypeService: QuotaTypeService) {}

  @Post()
  create(@Body() createQuotaTypeDto: CreateQuotaTypeDto) {
    return this.quotaTypeService.create(createQuotaTypeDto);
  }

  @Get()
  findAll() {
    return this.quotaTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quotaTypeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuotaTypeDto: UpdateQuotaTypeDto,
  ) {
    return this.quotaTypeService.update(+id, updateQuotaTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quotaTypeService.remove(+id);
  }
}
