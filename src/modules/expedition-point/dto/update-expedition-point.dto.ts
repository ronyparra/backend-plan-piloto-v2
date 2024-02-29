import { PartialType } from '@nestjs/swagger';
import { CreateExpeditionPointDto } from './create-expedition-point.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateExpeditionPointDto extends PartialType(
  CreateExpeditionPointDto,
) {
  @ApiProperty({ example: 'Norte' })
  name: string;
}
