import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}
  create(createCustomerDto: CreateCustomerDto) {
    return this.customerRepository.save(createCustomerDto);
  }

  findAll() {
    return this.customerRepository.find({
      select: {
        id: true,
        name: true,
        social_reason: true,
        document: true,
        address: true,
        phone: true,
        email: true,
        active: true,
        cityId: true,
        city: {
          id: true,
          name: true,
        },
        districtId: true,
        district: {
          id: true,
          name: true,
        },
      },
      relations: ['city', 'district'],
    });
  }

  findOne(id: number) {
    return this.customerRepository.findOne({
      select: {
        id: true,
        name: true,
        social_reason: true,
        document: true,
        address: true,
        phone: true,
        email: true,
        active: true,
        cityId: true,
        city: {
          id: true,
          name: true,
        },
        districtId: true,
        district: {
          id: true,
          name: true,
        },
      },
      where: { id },
    });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customerRepository.update(id, updateCustomerDto);
  }

  remove(id: number) {
    return this.customerRepository.delete(id);
  }
}
