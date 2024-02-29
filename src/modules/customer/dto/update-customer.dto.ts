import { PartialType } from '@nestjs/swagger';
import { CreateCustomerDto } from './create-customer.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  @ApiProperty({ example: 'Empresa 1' })
  name: string;

  @ApiProperty({ example: 'Empresa 1' })
  social_reason: string;

  @ApiProperty({ example: '123456789' })
  document: string;

  @ApiProperty({ example: 'Av. 1' })
  address: string;

  @ApiProperty({ example: '123456789' })
  phone: string;

  @ApiProperty({ example: 'example@example.com' })
  email: string;

  @ApiProperty({ example: 1 })
  cityId: number;

  @ApiProperty({ example: 1 })
  districtId: number;
}
