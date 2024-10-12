import { PartialType } from '@nestjs/swagger';
import { CreateServiceContractDto } from './create-service-contract.dto';

export class UpdateServiceContractDto extends PartialType(CreateServiceContractDto) {}
