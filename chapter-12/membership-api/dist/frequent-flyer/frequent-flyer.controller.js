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
const validate_email_dto_1 = require("./dto/validate-email.dto");
const swagger_1 = require("@nestjs/swagger");
let FrequentFlyerController = class FrequentFlyerController {
    constructor(frequentFlyerService) {
        this.frequentFlyerService = frequentFlyerService;
    }
    create(createFrequentFlyerDto) {
        if (this.frequentFlyerService.findByEmail(createFrequentFlyerDto.email)) {
            throw new common_1.HttpException('Email already exists', common_1.HttpStatus.CONFLICT);
        }
        return this.frequentFlyerService.create(createFrequentFlyerDto);
    }
    confirmEmail(validateEmailDto) {
        if (!this.frequentFlyerService.confirmEmail(validateEmailDto)) {
            throw new common_1.HttpException('Could not confirm this email with this token', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    findAll() {
        return this.frequentFlyerService.findAll();
    }
    findByFrequentFlyerNumber(id) {
        const frequentFlyer = this.frequentFlyerService.findByFrequentFlyerNumber(+id);
        if (!frequentFlyer) {
            throw new common_1.HttpException('No matching Frequent Flyer found with this number', common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return frequentFlyer;
        }
    }
    remove(id) {
        return this.frequentFlyerService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Register a new Frequent Flyer member' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Email already exists' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_frequent_flyer_dto_1.CreateFrequentFlyerDto]),
    __metadata("design:returntype", void 0)
], FrequentFlyerController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/email-confirmation"),
    (0, swagger_1.ApiOperation)({ summary: 'Confirm a new frequent flyer email address' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Email could not be confirmed with this token' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validate_email_dto_1.ValidateEmailDto]),
    __metadata("design:returntype", void 0)
], FrequentFlyerController.prototype, "confirmEmail", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Find the list of all current frequent flyers' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FrequentFlyerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Find a frequent flyer by frequent flyer number' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Missing mandatory fields' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FrequentFlyerController.prototype, "findByFrequentFlyerNumber", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a frequent flyer with a given frequent flyer number' }),
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