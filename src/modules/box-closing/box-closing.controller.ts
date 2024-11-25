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
  Request,
} from '@nestjs/common';
import { BoxClosingService } from './box-closing.service';
import { CreateBoxClosingDto } from './dto/create-box-closing.dto';
import { UpdateBoxClosingDto } from './dto/update-box-closing.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { QueryStatusDto } from 'src/commons/query-status.dto';

@UseGuards(AuthGuard)
@ApiTags('box-closing')
@Controller('box-closing')
export class BoxClosingController {
  constructor(private readonly boxClosingService: BoxClosingService) {}

  @Post()
  create(@Body() createBoxClosingDto: CreateBoxClosingDto, @Request() req) {
    createBoxClosingDto.userId = req.user.id;
    return this.boxClosingService.create(createBoxClosingDto);
  }

  @Get()
  findAll(@Query() queryParams: QueryStatusDto) {
    return this.boxClosingService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boxClosingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBoxClosingDto: UpdateBoxClosingDto,
  ) {
    return this.boxClosingService.update(+id, updateBoxClosingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boxClosingService.remove(+id);
  }
}
