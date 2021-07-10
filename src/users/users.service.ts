<<<<<<< HEAD
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto): Promise<User> {
    const user = await this.userRepository.findOne({
      where: [{ email: createUserDto.email }, { phone: createUserDto.phone }],
    });
    if (user)
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    const newUser = await this.userRepository.save(createUserDto);
    return newUser;
  }

  async findAll() {
    const users = await this.userRepository.findAndCount();
    return users;
  }

  async findOne(id: number): Promise<User[]> {
    const users = await this.userRepository.find({ where: { id } });
    return users;
  }

  async update(id: number, updateUserDto) {
    const user = await this.userRepository.update(id, {
      firstName: updateUserDto.firstName,
      lastName: updateUserDto.lastName,
      email: updateUserDto.email,
      phone: updateUserDto.phone,
    });
    return user;
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
    return { userId: id, message: 'User deleted' };
=======
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
>>>>>>> 4c05bef (generate resource - users)
  }
}
