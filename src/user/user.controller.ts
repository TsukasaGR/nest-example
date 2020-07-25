import {
  Controller,
  Get,
  Param,
  Post,
  HttpCode,
  HttpStatus,
  Body,
  Delete,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
// import { SubService } from '../shared/sub/sub.service';
import {
  CreateUserDto,
  IndexResponse,
  UserResponse,
  CreateResponse,
  DeleteResponse,
} from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/test')
  test(): string {
    return this.userService.test();
  }

  @Get()
  @ApiResponse({ status: HttpStatus.OK, type: IndexResponse })
  async index(): Promise<IndexResponse> {
    const users = await this.userService.findAll();
    return { users };
  }

  @Get(':id')
  @ApiResponse({ status: HttpStatus.OK, type: UserResponse })
  async getUser(@Param('id') id: string): Promise<UserResponse> {
    const user = await this.userService.findOne(id);
    return { user };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: HttpStatus.CREATED, type: CreateResponse })
  async create(@Body() user: CreateUserDto): Promise<CreateResponse> {
    const result = await this.userService.create(user);
    return { result };
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK, type: DeleteResponse })
  async remove(@Param('id') id: string): Promise<DeleteResponse> {
    const result = await this.userService.remove(id);
    return { result };
  }
}
