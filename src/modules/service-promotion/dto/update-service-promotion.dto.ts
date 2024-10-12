import { PartialType } from '@nestjs/swagger';
import { CreateServicePromotionDto } from './create-service-promotion.dto';

export class UpdateServicePromotionDto extends PartialType(CreateServicePromotionDto) {}
