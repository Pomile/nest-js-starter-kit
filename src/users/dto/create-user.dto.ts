<<<<<<< HEAD

import { IsEmail, IsString } from 'class-validator';
export class CreateUserDto {
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
=======
export class CreateUserDto {
  
>>>>>>> 4c05bef (generate resource - users)
}
