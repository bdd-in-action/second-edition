"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrequentFlyerModule = void 0;
const common_1 = require("@nestjs/common");
const frequent_flyer_service_1 = require("./frequent-flyer.service");
const frequent_flyer_controller_1 = require("./frequent-flyer.controller");
const frequent_flyer_repository_1 = require("./frequent-flyer.repository");
const token_service_1 = require("../token/token.service");
const token_controller_1 = require("../token/token.controller");
let FrequentFlyerModule = class FrequentFlyerModule {
};
FrequentFlyerModule = __decorate([
    (0, common_1.Module)({
        controllers: [frequent_flyer_controller_1.FrequentFlyerController, token_controller_1.TokenController],
        providers: [frequent_flyer_service_1.FrequentFlyerService, frequent_flyer_repository_1.FrequentFlyerRepository, token_service_1.TokenService]
    })
], FrequentFlyerModule);
exports.FrequentFlyerModule = FrequentFlyerModule;
//# sourceMappingURL=frequent-flyer.module.js.map