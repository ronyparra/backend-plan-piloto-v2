import { Injectable } from '@nestjs/common';
import { CreateCustomerBranchDto } from './dto/create-customer-branch.dto';
import { UpdateCustomerBranchDto } from './dto/update-customer-branch.dto';
import { CustomerBranch } from './entities/customer-branch.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerBranchService {
  constructor(
    @InjectRepository(CustomerBranch)
    private customerBranchRepository: Repository<CustomerBranch>,
  ) {}
  create(createCustomerBranchDto: CreateCustomerBranchDto) {
    return this.customerBranchRepository.save(createCustomerBranchDto);
  }

  findAll() {
    return this.customerBranchRepository.find({
      select: {
        id: true,
        name: true,
        address: true,
        customer: {
          id: true,
          name: true,
        },
        city: {
          id: true,
          name: true,
        },
        district: {
          id: true,
          name: true,
        },
        customerId: true,
        cityId: true,
        districtId: true,
      },
      relations: ['customer', 'city', 'district'],
      where: { active: true },
    });
  }

  findOne(id: number) {
    return this.customerBranchRepository.findOne({
      select: {
        id: true,
        name: true,
        address: true,
        customer: {
          id: true,
          name: true,
        },
        city: {
          id: true,
          name: true,
        },
        district: {
          id: true,
          name: true,
        },
        customerId: true,
        cityId: true,
        districtId: true,
      },
      relations: ['customer', 'city', 'district'],
      where: { id, active: true },
    });
  }

  update(id: number, updateCustomerBranchDto: UpdateCustomerBranchDto) {
    return this.customerBranchRepository.update(id, updateCustomerBranchDto);
  }

  remove(id: number) {
    return this.customerBranchRepository.delete(id);
  }
}
