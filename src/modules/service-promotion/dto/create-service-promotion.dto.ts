import { ApiProperty } from '@nestjs/swagger';

export class CreateServicePromotionDto {
  @ApiProperty({ example: '2021-10-10' })
  startDate: Date;

  @ApiProperty({ example: '2021-10-10' })
  endDate: Date;

  @ApiProperty({ example: 'Nombre' })
  name: string;

  @ApiProperty({ example: 1 })
  serviceTypeId: number;

  @ApiProperty({ example: 1 })
  discountPercentage: number;
}
