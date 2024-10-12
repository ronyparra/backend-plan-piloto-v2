import { PartialType } from '@nestjs/swagger';
import { CreateServiceProvidedDto } from './create-service-provided.dto';

export class UpdateServiceProvidedDto extends PartialType(CreateServiceProvidedDto) {}
