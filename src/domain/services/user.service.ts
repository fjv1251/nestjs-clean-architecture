import { Injectable, Inject } from '@nestjs/common';
import { User } from '@domain/entities/User';
import { CreateUserDto } from '@application/dto/create-user.dto';
import { UserRepository } from '@infrastructure/repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  getHello(): string {
    return 'Hello World!';
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.repository.create(createUserDto);
  }

  async find(): Promise<User[]> {
    return await this.repository.find();
  }
}
