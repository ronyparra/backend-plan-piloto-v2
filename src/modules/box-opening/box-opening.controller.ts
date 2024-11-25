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
import { BoxOpeningService } from './box-opening.service';
import { CreateBoxOpeningDto } from './dto/create-box-opening.dto';
import { UpdateBoxOpeningDto } from './dto/update-box-opening.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { QueryStatusDto } from 'src/commons/query-status.dto';
import * as dayjs from 'dayjs';

@UseGuards(AuthGuard)
@ApiTags('box-opening')
@Controller('box-opening')
export class BoxOpeningController {
  constructor(private readonly boxOpeningService: BoxOpeningService) {}

  @Post()
  create(@Body() createBoxOpeningDto: CreateBoxOpeningDto, @Request() req) {
    createBoxOpeningDto.userId = req.user.id;
    return this.boxOpeningService.create(createBoxOpeningDto);
  }

  @Get()
  findAll(@Query() queryParams: QueryStatusDto) {
    return this.boxOpeningService.findAll(queryParams).then((data) => {
      return data.map((item) => {
        return {
          ...item,
          date: dayjs(item.date).format('YYYY-MM-DD HH:mm:ss'),
        };
      });
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boxOpeningService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBoxOpeningDto: UpdateBoxOpeningDto,
  ) {
    return this.boxOpeningService.update(+id, updateBoxOpeningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boxOpeningService.remove(+id);
  }
}
