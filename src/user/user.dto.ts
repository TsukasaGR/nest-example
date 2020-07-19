import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'firstNameは必須です' })
  firstName: string;
  @IsNotEmpty({ message: 'lastNameは必須です' })
  lastName: string;
  isActive: boolean;
}
