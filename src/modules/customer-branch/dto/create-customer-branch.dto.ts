import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerBranchDto {
  @ApiProperty({ example: 'Sucursal 1' })
  name: string;

  @ApiProperty({ example: 'Av. 1' })
  address: string;

  @ApiProperty({ example: 1 })
  customerId: number;

  @ApiProperty({ example: 1 })
  cityId: number;

  @ApiProperty({ example: 1 })
  districtId: number;
}
