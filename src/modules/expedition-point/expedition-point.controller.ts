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
import { ExpeditionPointService } from './expedition-point.service';
import { CreateExpeditionPointDto } from './dto/create-expedition-point.dto';
import { UpdateExpeditionPointDto } from './dto/update-expedition-point.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@Controller('expedition-point')
@ApiTags('expedition-point')
export class ExpeditionPointController {
  constructor(
    private readonly expeditionPointService: ExpeditionPointService,
  ) {}

  @Post()
  create(@Body() createExpeditionPointDto: CreateExpeditionPointDto) {
    return this.expeditionPointService.create(createExpeditionPointDto);
  }

  @Get()
  findAll() {
    return this.expeditionPointService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expeditionPointService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExpeditionPointDto: UpdateExpeditionPointDto,
  ) {
    return this.expeditionPointService.update(+id, updateExpeditionPointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expeditionPointService.remove(+id);
  }
}
