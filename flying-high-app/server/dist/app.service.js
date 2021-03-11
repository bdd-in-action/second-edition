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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    constructor(http) {
        this.http = http;
    }
    async getCountryList(search) {
        try {
            const result = (await this.http.get(`https://restcountries.eu/rest/v2/name/${search}`).toPromise()).data.map((res) => {
                return ({ name: res.name, flag: res.flag });
            });
            return result;
        }
        catch (e) {
            if (e.response.data.status === 404) {
                return [{ name: 'no country found', flag: '' }];
            }
        }
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map