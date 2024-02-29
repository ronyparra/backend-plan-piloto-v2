import { PartialType } from '@nestjs/swagger';
import { CreateServiceTypeDto } from './create-service-type.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateServiceTypeDto extends PartialType(CreateServiceTypeDto) {
  @ApiProperty({ example: 'Servicio de prueba' })
  name: string;
}
