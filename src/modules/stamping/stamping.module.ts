import { Module } from '@nestjs/common';
import { StampingService } from './stamping.service';
import { StampingController } from './stamping.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stamping } from './entities/stamping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stamping])],
  controllers: [StampingController],
  providers: [StampingService],
})
export class StampingModule {}
