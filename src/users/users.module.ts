import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './users.entity';
import { SubModule } from '../shared/sub/sub.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), SubModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
