import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return [];
  }

  @Get()
  findQuery(@Query('role') role?: 'ADMIN' | 'USER') {
    return { role };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: { '' }) {
    return user;
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, updatedUser: { '' }) {
    return { id, updatedUser };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
