import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    { id: 'a', name: 'Taro' },
    { id: 'b', name: 'Hanako' },
  ];

  listUsers(): User[] {
    return this.users;
  }

  getUser(id: string): User {
    return this.users.find(value => value.id === id);
  }
}
