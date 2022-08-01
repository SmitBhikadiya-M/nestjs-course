import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  const overrideService = {
    createUser: jest.fn(dto => {
        return {
            id: Date.now(),
            ...dto
        }
    })
  }

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).overrideProvider(UsersService).useValue(overrideService).compile();

    controller = app.get<UsersController>(UsersController);
  });

    it('should be defined', () => {
      expect(controller).toBeDefined();
    });

    it('should create a user', async () => {
       expect(await controller.createUser({name: 'Smit'})).toEqual({
            id: expect.any(Number),
            name: 'Smit'
        });
    });
});
