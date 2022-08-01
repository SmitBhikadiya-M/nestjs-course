import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/db/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

    async getAll(name?: string): Promise<User[]>{
        const findBy: { name?:string } = {};
        if(name) findBy.name = name;
        return await this.userRepository.find({ relations: ['todos'], ...findBy });
    }

    async findById(id:number): Promise<User>{
        try{
            return await this.userRepository.findOneOrFail(id);
        }catch(e){
            throw new BadRequestException();
        }
    }

    async createUser(user:CreateUserDto): Promise<User>{
        const newUser = this.userRepository.create({ name: user.name });
        return this.userRepository.save(newUser);
    }

    async updateUser(id: number, body: UpdateUserDto): Promise<User>{
        const user = await this.findById(id);
        user.name = body.name;
        return this.userRepository.save(user);
    }

    async deleteUser(id: number) : Promise<User>{
        const user = await this.findById(id);
        await this.userRepository.remove(user);
        return user;
    }

}
