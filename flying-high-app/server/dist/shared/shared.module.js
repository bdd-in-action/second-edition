"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../auth/constants");
const auth_service_1 = require("./services/auth.service");
const bookings_service_1 = require("./services/bookings.service");
const flights_service_1 = require("./services/flights.service");
const users_service_1 = require("./services/users.service");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    common_1.Module({
        providers: [flights_service_1.FlightsService, bookings_service_1.BookingsService, users_service_1.UsersService, auth_service_1.AuthService],
        imports: [common_1.HttpModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '48h' }
            }),],
        exports: [flights_service_1.FlightsService, bookings_service_1.BookingsService, users_service_1.UsersService, auth_service_1.AuthService]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map