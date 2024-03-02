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
import { TaxTypeService } from './tax-type.service';
import { CreateTaxTypeDto } from './dto/create-tax-type.dto';
import { UpdateTaxTypeDto } from './dto/update-tax-type.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@Controller('tax-type')
@ApiTags('tax-type')
export class TaxTypeController {
  constructor(private readonly ivaService: TaxTypeService) {}

  @Post()
  create(@Body() createTaxDto: CreateTaxTypeDto) {
    return this.ivaService.create(createTaxDto);
  }

  @Get()
  findAll() {
    return this.ivaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ivaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaxDto: UpdateTaxTypeDto) {
    return this.ivaService.update(+id, updateTaxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ivaService.remove(+id);
  }
}
