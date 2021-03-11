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
exports.CreateFlightDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const city_dto_1 = require("./city.dto");
class CreateFlightDto {
}
__decorate([
    swagger_1.ApiProperty({ type: city_dto_1.CityDto, description: 'create your city object following City Schema' }),
    __metadata("design:type", city_dto_1.CityDto)
], CreateFlightDto.prototype, "departure", void 0);
__decorate([
    swagger_1.ApiProperty({ type: city_dto_1.CityDto, description: 'create your city object following City Schema' }),
    __metadata("design:type", city_dto_1.CityDto)
], CreateFlightDto.prototype, "destination", void 0);
__decorate([
    swagger_1.ApiProperty({ description: 'get the departure date from the flight search api' }),
    __metadata("design:type", Date)
], CreateFlightDto.prototype, "departureDate", void 0);
__decorate([
    swagger_1.ApiProperty({ description: 'get the departure date from the flight search api' }),
    __metadata("design:type", Date)
], CreateFlightDto.prototype, "arrivalDate", void 0);
__decorate([
    swagger_1.ApiProperty({ enum: ['Economy', 'Premium Economy', 'Business'], description: 'only Economy, Premium Economy, Business are allowed' }),
    __metadata("design:type", String)
], CreateFlightDto.prototype, "class", void 0);
__decorate([
    swagger_1.ApiProperty({ description: 'email is needed to create a flight record' }),
    __metadata("design:type", String)
], CreateFlightDto.prototype, "email", void 0);
exports.CreateFlightDto = CreateFlightDto;
//# sourceMappingURL=create-flight.dto.js.map