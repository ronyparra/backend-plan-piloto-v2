import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceTypeDto {
  @ApiProperty({ example: 'Servicio de prueba' })
  name: string;
}
