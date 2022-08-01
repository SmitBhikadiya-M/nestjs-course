import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { User } from 'src/db/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService){}
  
  @ApiOkResponse({type: User, isArray: true})
  @ApiNotFoundResponse()
  @ApiQuery({ name: 'name', required: false })
  @Get()
  async getUsers(@Query('name') name?:string) : Promise<User[]> {
    const user = await this.usersService.getAll(name);
    if(!user) throw new NotFoundException();
    return user;
  }

  @ApiOkResponse({type: User})
  @ApiParam({ name: 'id', required:true })
  @ApiNotFoundResponse()
  @Get(':id')
  async getUsersById(@Param('id', ParseIntPipe) id:number) : Promise<User>{
    const user = await this.usersService.findById(id);
    if(!user) throw new NotFoundException();
    return user;
  }

  @ApiCreatedResponse({ type: User })
  @Post()
  async createUser(@Body() body:CreateUserDto): Promise<User>{
    return await this.usersService.createUser(body);
  }

  @ApiOkResponse({ type: User })
  @ApiParam({ name:'id', required: true })
  @Put(':id')
  async updateUser(@Param('id') id:number, @Body() body:UpdateUserDto): Promise<User>{
    return await this.usersService.updateUser(id, body);
  }

  @ApiOkResponse({ type: User })
  @ApiParam({name: 'id', required: true})
  @Delete(':id')
  async deleteUser(@Param('id') id:number): Promise<User>{
    return await this.usersService.deleteUser(id);
  }

}
