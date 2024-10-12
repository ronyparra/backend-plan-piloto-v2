import { PartialType } from '@nestjs/swagger';
import { CreateServiceClaimDto } from './create-service-claim.dto';

export class UpdateServiceClaimDto extends PartialType(CreateServiceClaimDto) {}
