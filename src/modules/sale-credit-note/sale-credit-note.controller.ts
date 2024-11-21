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
import { SaleCreditNoteService } from './sale-credit-note.service';
import { CreateSaleCreditNoteDto } from './dto/create-sale-credit-note.dto';
import { UpdateSaleCreditNoteDto } from './dto/update-sale-credit-note.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { QueryStatusDto } from 'src/commons/query-status.dto';

@UseGuards(AuthGuard)
@ApiTags('sale-credit-note')
@Controller('sale-credit-note')
export class SaleCreditNoteController {
  constructor(private readonly saleCreditNoteService: SaleCreditNoteService) {}

  @Post()
  create(
    @Body() createSaleCreditNoteDto: CreateSaleCreditNoteDto,
    @Request() req,
  ) {
    createSaleCreditNoteDto.userId = req.user.id;
    return this.saleCreditNoteService.create(createSaleCreditNoteDto);
  }

  @Get()
  findAll(@Query() queryParams: QueryStatusDto) {
    return this.saleCreditNoteService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleCreditNoteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleCreditNoteDto: UpdateSaleCreditNoteDto,
  ) {
    return this.saleCreditNoteService.update(+id, updateSaleCreditNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleCreditNoteService.remove(+id);
  }
}
