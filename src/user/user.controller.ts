import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  listUsers(): User[] {
    return this.userService.listUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string): User {
    return this.userService.getUser(id);
  }
}
