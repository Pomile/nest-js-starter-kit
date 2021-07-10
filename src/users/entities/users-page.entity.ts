import { User } from './user.entity';

export class Users {
  total: number;
  perPage: number;
  page: number;
  lastPage: number;
  users: User[];
}
