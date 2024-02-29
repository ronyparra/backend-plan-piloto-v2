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
import { StrongboxService } from './strongbox.service';
import { CreateStrongboxDto } from './dto/create-strongbox.dto';
import { UpdateStrongboxDto } from './dto/update-strongbox.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@Controller('strongbox')
@ApiTags('strongbox')
export class StrongboxController {
  constructor(private readonly strongboxService: StrongboxService) {}

  @Post()
  create(@Body() createStrongboxDto: CreateStrongboxDto) {
    return this.strongboxService.create(createStrongboxDto);
  }

  @Get()
  findAll() {
    return this.strongboxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.strongboxService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStrongboxDto: UpdateStrongboxDto,
  ) {
    return this.strongboxService.update(+id, updateStrongboxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.strongboxService.remove(+id);
  }
}
