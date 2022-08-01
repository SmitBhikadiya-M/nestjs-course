import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Todo } from '../src/db/entities/todo.entity';
import { User } from '../src/db/entities/user.entity';
import { UsersService } from '../src/users/users.service';
import { UsersController } from '../src/users/users.controller';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  const mocUsers = [
    {
      id: 1,
      name: 'Smit',
    },
    {
      id: 2,
      name: 'Smit',
    },
    {
      id: 3,
      name: 'Smit',
    },
  ];
  const todos = [
    {
      id: 1,
      title: 'I am First Todo',
      ownerId: 1,
    },
    {
      id: 2,
      title: 'I am Second Todo',
      ownerId: 1,
    },
    {
      id: 3,
      title: 'I am Third Todo',
      ownerId: 2,
    },
  ];
  const findAll = () =>
    mocUsers.map((user) => {
      const todolist = todos
        .filter((todo) => todo.ownerId === user.id)
        .map((todo) => {
          const { ownerId, ...rest } = todo;
          return rest;
        });
      return { ...user, todos: { ...todolist } };
    });
  const create = (user) => {
    return { id: Date.now(), ...user };
  };
  const save = (user) => {
    mocUsers.push(user);
    return user;
  };
  const todoMockRepo = {};
  const userMockRepo = {
    find: jest.fn().mockImplementation(findAll),
    create: jest.fn().mockImplementation(create),
    save: jest.fn().mockImplementation(save),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: userMockRepo,
        },
        {
          provide: getRepositoryToken(Todo),
          useValue: todoMockRepo,
        },
      ],
    }).compile();
    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(findAll())
      .then((res) => {
        expect(res.body).toEqual(expect.any(Array));
        expect(res.body).toEqual(findAll());
      });
  });

  it('users (POST)', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({ name: 'smit' })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        console.log(res.body, findAll());
      });
  });
});
