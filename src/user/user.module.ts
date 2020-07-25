import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { SubModule } from '../shared/sub/sub.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), SubModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
