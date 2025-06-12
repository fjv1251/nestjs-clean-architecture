import * as mongoose from 'mongoose';
import { faker } from '@faker-js/faker';

export const UserSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  age: Number,
});

export interface User extends mongoose.Document {
    readonly _id: string;
    readonly name: string;
    readonly lastname: string;
    readonly age: number;
}

export class UserModel {
  constructor(user: UserModel | any) {
    this._id = faker.string.uuid();
    this.name = user.name;
    this.lastname = user.lastname;
    this.age = user.age;
  }

  _id?: string;
  name: string;
  lastname: string;
  age: number;

  save(): UserModel {
    return this;
  } 
}
