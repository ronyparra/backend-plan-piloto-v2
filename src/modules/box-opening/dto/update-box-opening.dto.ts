import { PartialType } from '@nestjs/swagger';
import { CreateBoxOpeningDto } from './create-box-opening.dto';

export class UpdateBoxOpeningDto extends PartialType(CreateBoxOpeningDto) {}
