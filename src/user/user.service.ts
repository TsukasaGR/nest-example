import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult, DeleteResult } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './user.dto';
import { SubService } from '../shared/sub/sub.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly subService: SubService,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async create(user: CreateUserDto): Promise<InsertResult> {
    return this.usersRepository.insert(user);
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }

  test(): string {
    // const subService = new SubService();
    return this.subService.subMethod1();
  }
}
