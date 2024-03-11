import { ApiProperty } from '@nestjs/swagger';
import { MasterConceptDto } from 'src/modules/concept/dto/master-concept.dto';
import { Taxes } from 'src/interfaces/tax.interface';

export class CreatePurchaseConceptDto {
  @ApiProperty({ example: 1 })
  amount: number;

  @ApiProperty({ example: 1 })
  quantity: number;

  @ApiProperty({ type: [MasterConceptDto] })
  concept: MasterConceptDto;

  @ApiProperty({ example: [] })
  taxes: Taxes[];
}
