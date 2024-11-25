import { PartialType } from '@nestjs/swagger';
import { CreateBoxClosingDto } from './create-box-closing.dto';

export class UpdateBoxClosingDto extends PartialType(CreateBoxClosingDto) {}
