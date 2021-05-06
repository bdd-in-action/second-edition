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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_interface_1 = require("../interface/users.interface");
class UserDto {
    constructor() {
        this.userLevel = users_interface_1.USER_LEVEL.STANDARD;
        this.points = 0;
    }
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserDto.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserDto.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserDto.prototype, "address", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserDto.prototype, "country", void 0);
__decorate([
    swagger_1.ApiProperty({
        enum: ['Mr', 'Ms', 'Mrs'],
        description: 'Only Mr, Ms and Mrs are allowed when creating user'
    }),
    __metadata("design:type", String)
], UserDto.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Boolean)
], UserDto.prototype, "newsletterSub", void 0);
__decorate([
    swagger_1.ApiProperty({
        enum: ['aisle', 'window'],
        description: 'Only asisle and window are allowed when creating user'
    }),
    __metadata("design:type", String)
], UserDto.prototype, "seatPreference", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserDto.prototype, "userLevel", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UserDto.prototype, "points", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map