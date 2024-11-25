import { Module } from '@nestjs/common';
import { SaleDebitNoteService } from './sale-debit-note.service';
import { SaleDebitNoteController } from './sale-debit-note.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleDebitNote } from './entities/sale-debit-note.entity';
import { SaleDebitNoteDetail } from './entities/sale-debit-note-detail.entity';
import { DocumentLegal } from '../../commons/document-legal';

@Module({
  imports: [TypeOrmModule.forFeature([SaleDebitNote, SaleDebitNoteDetail])],
  controllers: [SaleDebitNoteController],
  providers: [SaleDebitNoteService, DocumentLegal],
})
export class SaleDebitNoteModule {}
