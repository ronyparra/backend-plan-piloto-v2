import { Module } from '@nestjs/common';
import { SaleCreditNoteService } from './sale-credit-note.service';
import { SaleCreditNoteController } from './sale-credit-note.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleCreditNote } from './entities/sale-credit-note.entity';
import { SaleCreditNoteDetail } from './entities/sale-credit-note-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleCreditNote, SaleCreditNoteDetail])],
  controllers: [SaleCreditNoteController],
  providers: [SaleCreditNoteService],
})
export class SaleCreditNoteModule {}
