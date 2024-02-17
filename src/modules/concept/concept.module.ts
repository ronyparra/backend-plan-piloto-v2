import { Module } from '@nestjs/common';
import { ConceptService } from './concept.service';
import { ConceptController } from './concept.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Concept } from './entities/concept.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Concept])],
  controllers: [ConceptController],
  providers: [ConceptService],
})
export class ConceptModule {}
