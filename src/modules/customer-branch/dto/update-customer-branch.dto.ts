import { PartialType } from '@nestjs/swagger';
import { CreateCustomerBranchDto } from './create-customer-branch.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCustomerBranchDto extends PartialType(
  CreateCustomerBranchDto,
) {
  @ApiProperty({ example: 'Sucursal 1' })
  name: string;

  @ApiProperty({ example: 1 })
  customerId: number;

  @ApiProperty({ example: 1 })
  cityId: number;

  @ApiProperty({ example: 1 })
  districtId: number;
}
