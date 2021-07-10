import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
<<<<<<< HEAD
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
=======
  Delete } from '@nestjs/common';
>>>>>>> 4c05bef (generate resource - users)
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
<<<<<<< HEAD
  /**
   * @description Sign up
   * @param createUserDto
   * @returns {Object} *
   */
=======

>>>>>>> 4c05bef (generate resource - users)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
<<<<<<< HEAD
  findAll(@Query() query) {
=======
  findAll() {
>>>>>>> 4c05bef (generate resource - users)
    return this.usersService.findAll();
  }

  @Get(':id')
<<<<<<< HEAD
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
=======
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
>>>>>>> 4c05bef (generate resource - users)
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
<<<<<<< HEAD
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
=======
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
>>>>>>> 4c05bef (generate resource - users)
  }
}
