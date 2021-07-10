import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

<<<<<<< HEAD
export class UpdateUserDto extends PartialType(CreateUserDto) {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phone: number;
}
=======
export class UpdateUserDto extends PartialType(CreateUserDto) {}
>>>>>>> 4c05bef (generate resource - users)
