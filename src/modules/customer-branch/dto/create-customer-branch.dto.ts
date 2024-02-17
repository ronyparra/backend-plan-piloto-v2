import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerBranchDto {
  @ApiProperty({ example: 'Sucursal 1' })
  name: string;
  @ApiProperty({ example: 1 })
  customer: {
    id: number;
  };
}
