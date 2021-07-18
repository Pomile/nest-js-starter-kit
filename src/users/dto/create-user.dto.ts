
import { IsEmail, IsNumber, IsString } from 'class-validator';
export class CreateUserDto {
  @IsNumber()
  id?: number;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsString()
  confirmPassword: string;
  @IsString()
  phone?: number;
}
