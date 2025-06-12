import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User as UserModel } from '@infrastructure/models/user.model';
import { CreateUserDto } from '@application/dto/create-user.dto';
import { USER_MODEL_PROVIDER } from '@constants';
import { User } from '@domain/entities/User';

@Injectable()
export class UserRepository {
  constructor(@Inject(USER_MODEL_PROVIDER) private readonly userModel: Model<UserModel>) {}

  async create(user: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async find(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
