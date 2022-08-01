import { Injectable } from '@nestjs/common';

export type User = {
    id:number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'Smit',
            username: 'Smit123',
            password: 'some@pass'
        },
        {
            id: 2,
            name: 'Amit',
            username: 'Amit123',
            password: 'done@pass'
        }
    ];

    async findOne(username:string): Promise<User | undefined>{
        return this.users.find(user => user.username === username);
    }

}
