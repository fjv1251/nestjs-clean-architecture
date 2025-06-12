import { LoggerService, Context } from '@domain/services/logger.service';
import { Controller, Get, Post, Body, UseInterceptors } from '@nestjs/common';
import { UserService } from '@domain/services/user.service';
import { CreateUserDto } from '@application/dto/create-user.dto';
import { User } from '@domain/entities/User';
import { LoggingInterceptor } from '@application/interceptors/logging.interceptor';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller()
@UseInterceptors(LoggingInterceptor)
export class HelloController {
  private Log: LoggerService = new LoggerService('createOperation');
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get hello message' })
  @ApiResponse({ status: 200, description: 'Returns hello world message' })
  @Get('/hello')
  get(): string {
    const context: Context = { module: 'HelloController', method: 'get' };
    this.Log.logger('Hello World!', context);
    return 'Hello World!';
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Returns all users', type: [User] })
  @Get('/all')
  async getAll(): Promise<User[]> {
    const context: Context = { module: 'HelloController', method: 'getAll' };
    this.Log.logger('Hello World!', context);
    return await this.userService.find();
  }

  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'The user has been successfully created', type: User })
  @Post('/')
  async create(@Body() user: CreateUserDto): Promise<User> {
    const context: Context = { module: 'HelloController', method: 'create' };
    this.Log.logger(user, context);
    return await this.userService.create(user);
  }
}
