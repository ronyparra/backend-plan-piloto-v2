import { Injectable } from '@nestjs/common';
import { CreateExpeditionPointDto } from './dto/create-expedition-point.dto';
import { UpdateExpeditionPointDto } from './dto/update-expedition-point.dto';

@Injectable()
export class ExpeditionPointService {
  create(createExpeditionPointDto: CreateExpeditionPointDto) {
    return 'This action adds a new expeditionPoint';
  }

  findAll() {
    return `This action returns all expeditionPoint`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expeditionPoint`;
  }

  update(id: number, updateExpeditionPointDto: UpdateExpeditionPointDto) {
    return `This action updates a #${id} expeditionPoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} expeditionPoint`;
  }
}
