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
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import {
  CreateUserDto,
  IndexResponse,
  UserResponse,
  CreateResponse,
  DeleteResponse,
} from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/test')
  test(): string {
    return this.usersService.test();
  }

  @Get()
  @ApiTags('users')
  @ApiResponse({ status: HttpStatus.OK, type: IndexResponse })
  async index(): Promise<IndexResponse> {
    const users = await this.usersService.findAll();
    return { users };
  }

  @Get(':id')
  @ApiTags('users')
  @ApiResponse({ status: HttpStatus.OK, type: UserResponse })
  async getUser(@Param('id') id: string): Promise<UserResponse> {
    const user = await this.usersService.findOne(id);
    return { user };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiTags('users')
  @ApiResponse({ status: HttpStatus.CREATED, type: CreateResponse })
  async create(@Body() user: CreateUserDto): Promise<CreateResponse> {
    const result = await this.usersService.create(user);
    return { result };
  }

  @Delete(':id')
  @ApiTags('users')
  @ApiResponse({ status: HttpStatus.OK, type: DeleteResponse })
  async remove(@Param('id') id: string): Promise<DeleteResponse> {
    const result = await this.usersService.remove(id);
    return { result };
  }
}
