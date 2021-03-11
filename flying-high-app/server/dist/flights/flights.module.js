"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightsModule = void 0;
const common_1 = require("@nestjs/common");
const flights_controller_1 = require("./flights.controller");
const shared_module_1 = require("../shared/shared.module");
let FlightsModule = class FlightsModule {
};
FlightsModule = __decorate([
    common_1.Module({
        controllers: [flights_controller_1.FlightsController],
        imports: [common_1.HttpModule, shared_module_1.SharedModule],
    })
], FlightsModule);
exports.FlightsModule = FlightsModule;
//# sourceMappingURL=flights.module.js.map