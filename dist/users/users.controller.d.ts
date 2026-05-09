import { UsersService } from './users.service';
import type { User } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(status?: string): User[];
    findByStatus(status: string): User[];
    findOne(id: string): User | undefined;
    create(body: CreateUserDto, authorization?: string): User;
    update(id: string, body: CreateUserDto): User | undefined;
    remove(id: string): User | undefined;
}
