"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../shared/services/users.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("./dto/user.dto");
let UsersController = class UsersController {
    constructor(service) {
        this.service = service;
    }
    getUsers() {
        return this.service.getUsers();
    }
    getUserBookings(email) {
        return this.service.getFlightsByEmail(email);
    }
    createUser(user) {
        return this.service.createUser(user);
    }
    updateUser(user, userId) {
        return this.service.updateUser(userId, user);
    }
    getUserById(userId) {
        return this.service.getUserById(userId);
    }
    deleteUser(userId) {
        return this.service.deleteUser(userId);
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsers", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get('flights'),
    swagger_1.ApiQuery({
        name: 'email',
        description: 'get user account information (flight points, flight date, etc)'
    }),
    __param(0, common_1.Query('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserBookings", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiBody({ type: user_dto_1.UserDto }),
    common_1.Put(),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Body()), __param(1, common_1.Query('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUser", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get('id'),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Query('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserById", null);
__decorate([
    common_1.Delete(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiBody({ type: user_dto_1.UserDto }),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiQuery({
        name: 'user id',
        description: 'delete user with user id'
    }),
    __param(0, common_1.Query('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUser", null);
UsersController = __decorate([
    swagger_1.ApiBearerAuth(),
    common_1.Controller('api/users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map