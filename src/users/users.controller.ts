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

@Controller('users') // :: user route (includes all related to user route like get all routes,get by id)
export class UsersController {
  /**
   * Include http methods for user route
   * User controller handles user information || user route in express
   */

  @Get()
  findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
    // Get all users
    return {
      query: { page, limit },
      data: [],
    };
  }

  @Get('interns')
  findAllInterns() {
    return [];
  }

  @Post('ted/:id')
  create(
    @Body() parameters: {},
    @Param('id') id: String,
    @Query('all') all: { page: number; limit: 1 },
  ) {
    console.log('all', all);
    return { id, parameters, all };
  }

  @Get(':id')
  GetInfo(@Param('id') id: string) {
    return id;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return id;
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return { id };
  }
}
