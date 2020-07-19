import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { User } from './user.entity';
import { InsertResult, DeleteResult } from 'typeorm';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'firstNameは必須です' })
  firstName: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'lastNameは必須です' })
  lastName: string;
  @ApiProperty()
  isActive: boolean;
}

export class IndexResponse {
  @ApiProperty({ type: [User] })
  users: User[];
}

export class UserResponse {
  @ApiProperty({ type: User })
  user: User;
}

export class CreateResponse {
  @ApiProperty({ type: InsertResult })
  result: InsertResult;
}

export class DeleteResponse {
  @ApiProperty({ type: DeleteResult })
  result: DeleteResult;
}
