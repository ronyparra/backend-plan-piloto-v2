import { Module } from '@nestjs/common';
import { BoxClosingService } from './box-closing.service';
import { BoxClosingController } from './box-closing.controller';
import { BoxClosing } from './entities/box-closing.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BoxClosing])],
  controllers: [BoxClosingController],
  providers: [BoxClosingService],
})
export class BoxClosingModule {}
