import { Injectable } from '@nestjs/common';
import type { User } from './user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, username: 'Mohamed', email: 'mohamed@esprit.tn', status: 'active' },
    { id: 2, username: 'Sarra', email: 'sarra@esprit.tn', status: 'inactive' },
    { id: 3, username: 'Ali', email: 'ali@esprit.tn', status: 'inactive' },
    { id: 4, username: 'Eya', email: 'eya@esprit.tn', status: 'active' },
  ];

  findAll(status?: string): User[] {
    if (status) {
      return this.users.filter((u) => u.status === status);
    }
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find((u) => u.id === id);
  }

  create(data: Partial<User>, authorization?: string): User {
    const newId = this.users.length > 0 ? Math.max(...this.users.map((u) => u.id)) + 1 : 1;
    const newUser: User = {
      id: newId,
      username: data.username ?? '',
      email: data.email ?? '',
      status: data.status ?? 'active',
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, data: Partial<User>): User | undefined {
    const user = this.findOne(id);
    if (!user) return undefined;
    Object.assign(user, data);
    return user;
  }

  remove(id: number): User | undefined {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return undefined;
    const [removed] = this.users.splice(index, 1);
    return removed;
  }

  findByStatus(status: string): User[] {
    return this.users.filter((u) => u.status === status);
  }
}
