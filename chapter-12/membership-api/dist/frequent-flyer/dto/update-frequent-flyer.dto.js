"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFrequentFlyerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_frequent_flyer_dto_1 = require("./create-frequent-flyer.dto");
class UpdateFrequentFlyerDto extends (0, mapped_types_1.PartialType)(create_frequent_flyer_dto_1.CreateFrequentFlyerDto) {
}
exports.UpdateFrequentFlyerDto = UpdateFrequentFlyerDto;
//# sourceMappingURL=update-frequent-flyer.dto.js.map