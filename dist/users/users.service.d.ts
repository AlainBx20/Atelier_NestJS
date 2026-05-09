import type { User } from './user.interface';
export declare class UsersService {
    private users;
    findAll(status?: string): User[];
    findOne(id: number): User | undefined;
    create(data: Partial<User>, authorization?: string): User;
    update(id: number, data: Partial<User>): User | undefined;
    remove(id: number): User | undefined;
    findByStatus(status: string): User[];
}
