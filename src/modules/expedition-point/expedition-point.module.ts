import { Module } from '@nestjs/common';
import { ExpeditionPointService } from './expedition-point.service';
import { ExpeditionPointController } from './expedition-point.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpeditionPoint } from './entities/expedition-point.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExpeditionPoint])],
  controllers: [ExpeditionPointController],
  providers: [ExpeditionPointService],
})
export class ExpeditionPointModule {}
