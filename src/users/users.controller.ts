import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  Headers,
} from '@nestjs/common';
import { UsersService } from './users.service';
import type { User } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  
  @Get()
  findAll(@Query('status') status?: string): User[] {
    return this.usersService.findAll(status);
  }

  
  @Get('active/:status')
  findByStatus(@Param('status') status: string): User[] {
    return this.usersService.findByStatus(status);
  }

  
  @Get(':id')
  findOne(@Param('id') id: string): User | undefined {
    return this.usersService.findOne(+id);
  }


  @Post()
  create(
    @Body() body: CreateUserDto,
    @Headers('authorization') authorization?: string,
  ): User {
    return this.usersService.create(body, authorization);
  }


  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: CreateUserDto,
  ): User | undefined {
    return this.usersService.update(+id, body);
  }


  @Delete(':id')
  remove(@Param('id') id: string): User | undefined {
    return this.usersService.remove(+id);
  }
}
