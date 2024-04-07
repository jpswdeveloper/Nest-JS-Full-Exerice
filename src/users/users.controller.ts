import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users') // :: user route (includes all related to user route like get all routes,get by id)
export class UsersController {
  constructor(private readonly userServices: UsersService) {} // Dependency injection
  /**
   * Include http methods for user route
   * User controller handles user information || user route in express
   */

  @Get()
  findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
    // Get all users

    const data = this.userServices.findAll('admin');
    return {
      query: { page, limit },
      data,
    };
  }

  @Get('interns')
  findAllInterns() {
    return [];
  }

  @Post('')
  create(@Body() parameters: { email: string; name: string; role: 'admin' }) {
    const data = this.userServices.create(parameters);
    return {
      success: true,
      message: 'user created successfully',
      data,
    };
  }

  @Get(':id')
  GetInfo(@Param('id') id: string) {
    return id;
  }

  @Put(':id')
  update(@Param('id') id: number) {
    return this.userServices.update(id, { email: 'please ' });
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userServices.delete(id);
  }
}
