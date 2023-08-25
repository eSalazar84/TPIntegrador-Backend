import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
const URL_users = 'http://localhost:3030/users'

@Injectable()
export class UserService {
    private async getAll(): Promise<User[]> {
        try {
            const res = await fetch(URL_users, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!res.ok) throw new Error('Response not ok');
            const parsed = res.json();
            return parsed
        } catch (err) {
            throw new Error(err)
        }
    }

    async getAllUsers(): Promise<User[]>{
        try {
            return this.getAll();
        } catch (err) {
            throw new Error(err);            
        }
    }
}
