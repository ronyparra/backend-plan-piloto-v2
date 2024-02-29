import { PartialType } from '@nestjs/swagger';
import { CreateSupplierDto } from './create-supplier.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSupplierDto extends PartialType(CreateSupplierDto) {
  @ApiProperty({ example: 'Proveedor 1' })
  name: string;

  @ApiProperty({ example: 'Proveedor 1' })
  socialReason: string;

  @ApiProperty({ example: '123456789' })
  document: string;

  @ApiProperty({ example: '123456789' })
  phone: string;

  @ApiProperty({ example: 'test@test.com' })
  email: string;

  @ApiProperty({ example: '123456789' })
  address: string;

  @ApiProperty({ example: 1 })
  districtId: number;

  @ApiProperty({ example: 1 })
  cityId: number;
}
