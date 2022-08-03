import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'
@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService){}

    async login(user: User){
        return {
            access_token: this.jwtService.sign({username: user.username, sub: user.id}, ),
            user
        }
    }

    async signup(signupUserInput: CreateUserInput){
        const user = await this.userService.findOne(signupUserInput.username);
        if(user){
            throw new Error('User Already Exists!');
        }
        const password = await bcrypt.hash(signupUserInput.password, 10);
        return this.userService.create({
            ...signupUserInput,
            password
        });
    }

    async validateUser(username: string, password:string): Promise<any>{
        const user = await this.userService.findOne(username);
        if(user && await bcrypt.compare(password, user.password)){
            const { password, ...rest } = user;
            return rest;
        }
        return null;
    }
}
