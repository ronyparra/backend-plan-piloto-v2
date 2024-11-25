import { Module } from '@nestjs/common';
import { BoxOpeningService } from './box-opening.service';
import { BoxOpeningController } from './box-opening.controller';
import { BoxOpening } from './entities/box-opening.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BoxOpening])],
  controllers: [BoxOpeningController],
  providers: [BoxOpeningService],
})
export class BoxOpeningModule {}
