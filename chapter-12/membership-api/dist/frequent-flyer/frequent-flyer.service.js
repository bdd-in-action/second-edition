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
exports.FrequentFlyerService = void 0;
const common_1 = require("@nestjs/common");
const frequent_flyer_repository_1 = require("./frequent-flyer.repository");
const status_1 = require("./entities/status");
const token_service_1 = require("../token/token.service");
let FrequentFlyerService = class FrequentFlyerService {
    constructor(frequentFlyerRepository, tokenService) {
        this.frequentFlyerRepository = frequentFlyerRepository;
        this.tokenService = tokenService;
    }
    create(frequentFlyerDetails) {
        console.log("Create: " + frequentFlyerDetails);
        const nextFrequentFlyerNumber = this.frequentFlyerRepository.findLargestFrequentFlyerNumber(1000000) + 1;
        const newFrequentFlyer = { frequentFlyerNumber: nextFrequentFlyerNumber, status: status_1.Status.Pending };
        const frequentFlyer = Object.assign(newFrequentFlyer, frequentFlyerDetails);
        this.frequentFlyerRepository.save(frequentFlyer);
        this.tokenService.newToken(frequentFlyerDetails.email, nextFrequentFlyerNumber);
        return frequentFlyer;
    }
    findAll() {
        return this.frequentFlyerRepository.findAll();
    }
    findByFrequentFlyerNumber(id) {
        return this.frequentFlyerRepository.findByFrequentFlyerNumber(id);
    }
    findByEmail(email) {
        return this.frequentFlyerRepository.findByEmail(email);
    }
    remove(id) {
        this.frequentFlyerRepository.removeByFrequentFlyerNumber(id);
    }
    confirmEmail(validateEmailDto) {
        if (this.tokenService.validate(validateEmailDto.email, validateEmailDto.token)) {
            let frequentFlyer = this.frequentFlyerRepository.findByEmail(validateEmailDto.email);
            frequentFlyer.status = status_1.Status.Active;
            return true;
        }
        else {
            return false;
        }
    }
};
FrequentFlyerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [frequent_flyer_repository_1.FrequentFlyerRepository,
        token_service_1.TokenService])
], FrequentFlyerService);
exports.FrequentFlyerService = FrequentFlyerService;
//# sourceMappingURL=frequent-flyer.service.js.map