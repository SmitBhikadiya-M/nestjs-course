import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../db/entities/user.entity';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let service: UsersService;

  const mockUserRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest.fn().mockImplementation((user) => {
      return {
        id: Date.now(),
        ...user,
      };
    }),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = app.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new user record and return that', async () => {
    expect(await service.createUser({ name: 'Smit' })).toEqual({
      id: expect.any(Number),
      name: 'Smit',
    });
  });
});
