import { PartialType } from '@nestjs/swagger';
import { CreateServiceDiscountDto } from './create-service-discount.dto';

export class UpdateServiceDiscountDto extends PartialType(CreateServiceDiscountDto) {}
