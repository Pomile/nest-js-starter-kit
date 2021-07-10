import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
<<<<<<< HEAD
import { userProviders } from './users.repository';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [...userProviders, UsersService],
  exports: [UsersService, ...userProviders],
=======

@Module({
  controllers: [UsersController],
  providers: [UsersService]
>>>>>>> 4c05bef (generate resource - users)
})
export class UsersModule {}
