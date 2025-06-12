import { USER_MODEL_PROVIDER } from '@constants';
import { UserService } from '@domain/services/user.service';
import { faker } from '@faker-js/faker';
import { UserRepository } from '@infrastructure/repository/user.repository';
import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { cloneDeep } from 'lodash';

describe('User Service', () => {
  let service: UserService;
  let repository: UserRepository;

  beforeAll(async () => {
    const userProviders = {
      provide: USER_MODEL_PROVIDER,
      useValue: {
        new: jest.fn().mockResolvedValue({}),
        constructor: jest.fn().mockResolvedValue({}),
        find: jest.fn(),
        findOne: jest.fn(),
        update: jest.fn(),
        create: jest.fn(),
        remove: jest.fn(),
        exec: jest.fn(),
      },
    };

    const module: TestingModule = await Test
      .createTestingModule({
        providers: [
          UserService,
          UserRepository,
          userProviders,
        ],
      })
      .compile();

    service = module.get<UserService>(UserService);
    repository = module.get<UserRepository>(UserRepository);
  });

  it('should create a user', async () => {
    const user = {
      _id: faker.string.uuid(),
      name: faker.person.fullName(),
      lastname: faker.person.lastName(),
      age: faker.number.int(),
    };

    const newUser = cloneDeep(user);
    jest.spyOn(repository, 'create').mockImplementation(async () => user);
    const data = await service.create(newUser);
    expect(data).toBeDefined();
    expect(data._id).toBeDefined();
    Object.keys(data).forEach((key) => {
      expect(data[key]).toBe(user[key]);
    });
  });
});

