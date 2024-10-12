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
import { ServiceClaimService } from './service-claim.service';
import { CreateServiceClaimDto } from './dto/create-service-claim.dto';
import { UpdateServiceClaimDto } from './dto/update-service-claim.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('service-claim')
@UseGuards(AuthGuard)
@Controller('service-claim')
export class ServiceClaimController {
  constructor(private readonly serviceClaimService: ServiceClaimService) {}

  @Post()
  create(@Body() createServiceClaimDto: CreateServiceClaimDto) {
    return this.serviceClaimService.create(createServiceClaimDto);
  }

  @Get()
  findAll() {
    return this.serviceClaimService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceClaimService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateServiceClaimDto: UpdateServiceClaimDto,
  ) {
    return this.serviceClaimService.update(+id, updateServiceClaimDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceClaimService.remove(+id);
  }
}
