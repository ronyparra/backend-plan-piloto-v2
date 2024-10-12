import { ApiProperty } from '@nestjs/swagger';
import { ServiceContractClausule } from '../entities/service-contract-clausule.entity';

export class CreateServiceContractDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  @ApiProperty({ example: 1 })
  customerId: number;

  @ApiProperty({ example: 1 })
  serviceTypeId: number;

  userId: number;

  @ApiProperty({ type: [ServiceContractClausule] })
  serviceContractClausule: ServiceContractClausule[];
}
