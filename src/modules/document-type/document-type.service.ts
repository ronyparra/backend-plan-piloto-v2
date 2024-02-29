import { Injectable } from '@nestjs/common';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';
import { DocumentType } from './entities/document-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DocumentTypeService {
  constructor(
    @InjectRepository(DocumentType)
    private documentTypeRepository: Repository<DocumentType>,
  ) {}
  create(createDocumentTypeDto: CreateDocumentTypeDto) {
    return this.documentTypeRepository.save(createDocumentTypeDto);
  }

  findAll() {
    return this.documentTypeRepository.find({
      select: ['id', 'name'],
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.documentTypeRepository.findOne({
      select: ['id', 'name'],
      where: { id, active: true },
    });
  }

  update(id: number, updateDocumentTypeDto: UpdateDocumentTypeDto) {
    return this.documentTypeRepository.update(id, updateDocumentTypeDto);
  }

  remove(id: number) {
    return this.documentTypeRepository.delete(id);
  }
}
