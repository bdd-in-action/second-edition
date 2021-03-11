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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./shared/services/auth.service");
const auth_user_dto_1 = require("./auth/auth-user.dto");
const local_auth_guard_1 = require("./auth/local-auth.guard");
const app_service_1 = require("./app.service");
const user_dto_1 = require("./users/dto/user.dto");
const users_service_1 = require("./shared/services/users.service");
let AppController = class AppController {
    constructor(authService, usersService, appService) {
        this.authService = authService;
        this.usersService = usersService;
        this.appService = appService;
    }
    async login(authUser) {
        return this.authService.login(authUser);
    }
    register(user) {
        return this.usersService.createUser(user);
    }
    getCountryList(search) {
        return this.appService.getCountryList(search);
    }
};
__decorate([
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.Post('api/auth/login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_user_dto_1.AuthUserDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    common_1.Post('api/auth/register'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "register", null);
__decorate([
    common_1.Get('api/getCountryList'),
    __param(0, common_1.Query('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getCountryList", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService,
        app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map