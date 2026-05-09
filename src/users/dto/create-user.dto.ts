import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'username must be a string' })
  username: string;

  @IsEmail({}, { message: 'email must be a valid email address' })
  email: string;
}
