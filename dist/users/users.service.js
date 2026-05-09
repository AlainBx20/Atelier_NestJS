"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    users = [
        { id: 1, username: 'Mohamed', email: 'mohamed@esprit.tn', status: 'active' },
        { id: 2, username: 'Sarra', email: 'sarra@esprit.tn', status: 'inactive' },
        { id: 3, username: 'Ali', email: 'ali@esprit.tn', status: 'inactive' },
        { id: 4, username: 'Eya', email: 'eya@esprit.tn', status: 'active' },
    ];
    findAll(status) {
        if (status) {
            return this.users.filter((u) => u.status === status);
        }
        return this.users;
    }
    findOne(id) {
        return this.users.find((u) => u.id === id);
    }
    create(data, authorization) {
        const newId = this.users.length > 0 ? Math.max(...this.users.map((u) => u.id)) + 1 : 1;
        const newUser = {
            id: newId,
            username: data.username ?? '',
            email: data.email ?? '',
            status: data.status ?? 'active',
        };
        this.users.push(newUser);
        return newUser;
    }
    update(id, data) {
        const user = this.findOne(id);
        if (!user)
            return undefined;
        Object.assign(user, data);
        return user;
    }
    remove(id) {
        const index = this.users.findIndex((u) => u.id === id);
        if (index === -1)
            return undefined;
        const [removed] = this.users.splice(index, 1);
        return removed;
    }
    findByStatus(status) {
        return this.users.filter((u) => u.status === status);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map