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
import { StampingService } from './stamping.service';
import { CreateStampingDto } from './dto/create-stamping.dto';
import { UpdateStampingDto } from './dto/update-stamping.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@Controller('stamping')
@ApiTags('stamping')
export class StampingController {
  constructor(private readonly stampingService: StampingService) {}

  @Post()
  create(@Body() createStampingDto: CreateStampingDto) {
    return this.stampingService.create(createStampingDto);
  }

  @Get()
  findAll() {
    return this.stampingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stampingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStampingDto: UpdateStampingDto,
  ) {
    return this.stampingService.update(+id, updateStampingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stampingService.remove(+id);
  }
}
