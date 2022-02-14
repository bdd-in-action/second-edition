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
exports.FrequentFlyerController = void 0;
const common_1 = require("@nestjs/common");
const frequent_flyer_service_1 = require("./frequent-flyer.service");
const create_frequent_flyer_dto_1 = require("./dto/create-frequent-flyer.dto");
const update_frequent_flyer_dto_1 = require("./dto/update-frequent-flyer.dto");
let FrequentFlyerController = class FrequentFlyerController {
    constructor(frequentFlyerService) {
        this.frequentFlyerService = frequentFlyerService;
    }
    create(createFrequentFlyerDto) {
        return this.frequentFlyerService.create(createFrequentFlyerDto);
    }
    findAll() {
        return this.frequentFlyerService.findAll();
    }
    findOne(id) {
        return this.frequentFlyerService.findOne(+id);
    }
    update(id, updateFrequentFlyerDto) {
        return this.frequentFlyerService.update(+id, updateFrequentFlyerDto);
    }
    remove(id) {
        return this.frequentFlyerService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_frequent_flyer_dto_1.CreateFrequentFlyerDto]),
    __metadata("design:returntype", void 0)
], FrequentFlyerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FrequentFlyerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FrequentFlyerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_frequent_flyer_dto_1.UpdateFrequentFlyerDto]),
    __metadata("design:returntype", void 0)
], FrequentFlyerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FrequentFlyerController.prototype, "remove", null);
FrequentFlyerController = __decorate([
    (0, common_1.Controller)('api/frequent-flyer'),
    __metadata("design:paramtypes", [frequent_flyer_service_1.FrequentFlyerService])
], FrequentFlyerController);
exports.FrequentFlyerController = FrequentFlyerController;
//# sourceMappingURL=frequent-flyer.controller.js.map