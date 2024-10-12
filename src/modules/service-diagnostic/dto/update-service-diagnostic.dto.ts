import { PartialType } from '@nestjs/swagger';
import { CreateServiceDiagnosticDto } from './create-service-diagnostic.dto';

export class UpdateServiceDiagnosticDto extends PartialType(
  CreateServiceDiagnosticDto,
) {}
