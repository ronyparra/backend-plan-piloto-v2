import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Supplier } from './entities/supplier.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier)
    private supplierRepository: Repository<Supplier>,
  ) {}
  create(createSupplierDto: CreateSupplierDto) {
    return this.supplierRepository.save(createSupplierDto);
  }

  findAll() {
    return this.supplierRepository.find({
      select: {
        id: true,
        name: true,
        social_reason: true,
        document: true,
        phone: true,
        email: true,
        address: true,
        districtId: true,
        cityId: true,
        district: {
          id: true,
          name: true,
        },
        city: {
          id: true,
          name: true,
        },
      },
      where: {
        active: true,
      },
      relations: ['district', 'city'],
    });
  }

  findOne(id: number) {
    return this.supplierRepository.findOne({
      select: {
        id: true,
        name: true,
        social_reason: true,
        document: true,
        phone: true,
        email: true,
        address: true,
        districtId: true,
        cityId: true,
        district: {
          id: true,
          name: true,
        },
        city: {
          id: true,
          name: true,
        },
      },
      where: { id, active: true },
      relations: ['district', 'city'],
    });
  }

  update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return this.supplierRepository.update(id, updateSupplierDto);
  }

  remove(id: number) {
    return this.supplierRepository.delete(id);
  }
}
