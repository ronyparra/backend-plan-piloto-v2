import { Module } from '@nestjs/common';
import { SaleRemissionNoteService } from './sale-remission-note.service';
import { SaleRemissionNoteController } from './sale-remission-note.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleRemissionNote } from './entities/sale-remission-note.entity';
import { SaleRemissionNoteDetail } from './entities/sale-remission-note-detail.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SaleRemissionNote, SaleRemissionNoteDetail]),
  ],
  controllers: [SaleRemissionNoteController],
  providers: [SaleRemissionNoteService],
})
export class SaleRemissionNoteModule {}
