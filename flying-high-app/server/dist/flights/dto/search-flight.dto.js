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
exports.SearchFlightDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SearchFlightDto {
}
__decorate([
    swagger_1.ApiProperty({ description: 'get departure city string from cities search endpoint' }),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "departure", void 0);
__decorate([
    swagger_1.ApiProperty({ description: 'get destination city string from cities search endpoint' }),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "destination", void 0);
__decorate([
    swagger_1.ApiProperty({ description: 'pass a Date object of departure' }),
    __metadata("design:type", Date)
], SearchFlightDto.prototype, "departureDate", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ description: '[NOT REQUIRED]pass a Date object of return, which is LATER than the departure date' }),
    __metadata("design:type", Date)
], SearchFlightDto.prototype, "returnDate", void 0);
__decorate([
    swagger_1.ApiProperty({ enum: ['Economy', 'Premium Economy', 'Business'], description: 'only Economy, Premium Economy, Business are allowed' }),
    __metadata("design:type", String)
], SearchFlightDto.prototype, "class", void 0);
exports.SearchFlightDto = SearchFlightDto;
//# sourceMappingURL=search-flight.dto.js.map