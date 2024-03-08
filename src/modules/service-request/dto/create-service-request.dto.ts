import { ApiProperty } from '@nestjs/swagger';
import { ServiceRequestConcept } from '../entities/service-request-concept.entity';

export class CreateServiceRequestDto {
  @ApiProperty({ example: '2021-10-10' })
  date: Date;

  @ApiProperty({ example: 'Observation' })
  observation: string;

  @ApiProperty({ example: 1 })
  customerId: number;

  userId: number;

  @ApiProperty({ type: [ServiceRequestConcept] })
  serviceRequestConcept: ServiceRequestConcept[];
}
