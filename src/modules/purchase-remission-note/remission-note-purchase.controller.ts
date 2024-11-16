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
} from '@nestjs/common';
import { RemissionNotePurchaseService } from './remission-note-purchase.service';
import {
  CreateRemissionNotePurchaseDto,
  RemissionNotePurchaseDetailDto,
} from './dto/create-remission-note-purchase.dto';
import { UpdateRemissionNotePurchaseDto } from './dto/update-remission-note-purchase.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiTags('purchase-remission-note')
@Controller('purchase-remission-note')
export class RemissionNotePurchaseController {
  constructor(
    private readonly remissionNotePurchaseService: RemissionNotePurchaseService,
  ) {}

  @Post()
  create(
    @Body() createRemissionNotePurchaseDto: CreateRemissionNotePurchaseDto,
    @Request() req,
  ) {
    createRemissionNotePurchaseDto.userId = req.user.id;
    return this.remissionNotePurchaseService.create(
      createRemissionNotePurchaseDto,
    );
  }

  @Get()
  findAll() {
    return this.remissionNotePurchaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.remissionNotePurchaseService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRemissionNotePurchaseDto: UpdateRemissionNotePurchaseDto,
  ) {
    const detail: RemissionNotePurchaseDetailDto[] =
      updateRemissionNotePurchaseDto.remissionNotePurchaseDetail;

    delete updateRemissionNotePurchaseDto.remissionNotePurchaseDetail;
    await this.remissionNotePurchaseService.update(
      +id,
      updateRemissionNotePurchaseDto,
    );
    await this.remissionNotePurchaseService.updateDetail(+id, detail);
    return this.remissionNotePurchaseService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.remissionNotePurchaseService.remove(+id);
  }
}
