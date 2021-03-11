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
exports.FlightsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const create_flight_dto_1 = require("./dto/create-flight.dto");
const search_flight_dto_1 = require("./dto/search-flight.dto");
const flights_service_1 = require("../shared/services/flights.service");
let FlightsController = class FlightsController {
    constructor(service) {
        this.service = service;
    }
    getFlights() {
        return this.service.getFlights();
    }
    getCities(cityname) {
        return this.service.getCities(cityname);
    }
    createFlight(createFlightDto) {
        const flight = Object.assign(Object.assign({}, createFlightDto), { points: createFlightDto.departure.point + createFlightDto.destination.point, orderNumber: this.service.generateRandomString(8), price: 0, returnTime: new Date(), departureTime: new Date(), returnDate: new Date() });
        return this.service.createFlight(flight);
    }
    getResourceFlights(searchFlightDto) {
        const flight = Object.assign(Object.assign({}, searchFlightDto), { points: 0, orderNumber: this.service.generateRandomString(8), price: 0, returnTime: new Date(), departureTime: new Date(), departure: this.service.getCity(searchFlightDto.departure), destination: this.service.getCity(searchFlightDto.destination), email: '' });
        return this.service.searchFlight(flight);
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FlightsController.prototype, "getFlights", null);
__decorate([
    common_1.Get('cities'),
    swagger_1.ApiQuery({
        name: 'cityname',
        description: 'get city list by searching with city name'
    }),
    __param(0, common_1.Query('cityname')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightsController.prototype, "getCities", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiBody({ type: create_flight_dto_1.CreateFlightDto }),
    common_1.Post(),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_flight_dto_1.CreateFlightDto]),
    __metadata("design:returntype", void 0)
], FlightsController.prototype, "createFlight", null);
__decorate([
    common_1.Post('search'),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    swagger_1.ApiBody({ type: search_flight_dto_1.SearchFlightDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_flight_dto_1.SearchFlightDto]),
    __metadata("design:returntype", void 0)
], FlightsController.prototype, "getResourceFlights", null);
FlightsController = __decorate([
    swagger_1.ApiBearerAuth(),
    common_1.Controller('api/flights'),
    __metadata("design:paramtypes", [flights_service_1.FlightsService])
], FlightsController);
exports.FlightsController = FlightsController;
//# sourceMappingURL=flights.controller.js.map