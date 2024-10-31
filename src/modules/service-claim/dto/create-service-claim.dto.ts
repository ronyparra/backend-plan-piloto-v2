import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceClaimDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Description' })
  description: string;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  @ApiProperty({ example: 1 })
  serviceContractId: number;

  userId: number;
}
