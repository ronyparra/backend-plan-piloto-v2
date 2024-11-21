import { Module } from '@nestjs/common';
import { SaleDebitNoteService } from './sale-debit-note.service';
import { SaleDebitNoteController } from './sale-debit-note.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleDebitNote } from './entities/sale-debit-note.entity';
import { SaleDebitNoteDetail } from './entities/sale-debit-note-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleDebitNote, SaleDebitNoteDetail])],
  controllers: [SaleDebitNoteController],
  providers: [SaleDebitNoteService],
})
export class SaleDebitNoteModule {}
