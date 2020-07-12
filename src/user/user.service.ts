import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult, DeleteResult } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async create(user: CreateUserDTO): Promise<InsertResult> {
    return this.usersRepository.insert(user);
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }
}
