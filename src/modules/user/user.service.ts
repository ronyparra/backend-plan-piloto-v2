import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const userInstance: User = this.userRepository.create(createUserDto);
    return this.userRepository.save(userInstance);
  }

  findAll() {
    return this.userRepository.find({
      select: ['id', 'username', 'email', 'name', 'lastname'],
    });
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      select: ['id', 'username', 'email', 'name', 'lastname'],
      where: { id, active: true },
    });
  }

  findByEmail(email: string) {
    return this.userRepository.findOne({
      select: ['id', 'username', 'email', 'name', 'lastname', 'password'],
      where: { email, active: true },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userInstance: User = this.userRepository.create(updateUserDto);
    return this.userRepository.update(id, userInstance);
  }

  remove(id: number) {
    return this.userRepository.update(id, { active: false });
  }
}
