import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { LoginUserInput } from './dto/login.input';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService){}

    async login(user: User){
        return {
            access_token: 'jwt',
            user
        }
    }

    async validateUser(username: string, password:string): Promise<any>{
        const user = await this.userService.findOne(username);
        if(user && user.password === password){
            const { password, ...rest } = user;
            return rest;
        }
        return null;
    }
}
