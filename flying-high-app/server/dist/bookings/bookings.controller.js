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
exports.BookingsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const flights_service_1 = require("../shared/services/flights.service");
let BookingsController = class BookingsController {
    constructor(flightService) {
        this.flightService = flightService;
    }
    getUserBookings(email) {
        return this.flightService.getFlightsByEmail(email);
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(),
    swagger_1.ApiQuery({
        name: 'email',
        description: 'get user bookings by email'
    }),
    __param(0, common_1.Query('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookingsController.prototype, "getUserBookings", null);
BookingsController = __decorate([
    swagger_1.ApiBearerAuth(),
    common_1.Controller('api/bookings'),
    __metadata("design:paramtypes", [flights_service_1.FlightsService])
], BookingsController);
exports.BookingsController = BookingsController;
//# sourceMappingURL=bookings.controller.js.map