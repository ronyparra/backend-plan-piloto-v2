import { Module } from '@nestjs/common';
import { StrongboxService } from './strongbox.service';
import { StrongboxController } from './strongbox.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Strongbox } from './entities/strongbox.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Strongbox])],
  controllers: [StrongboxController],
  providers: [StrongboxService],
})
export class StrongboxModule {}
