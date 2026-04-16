"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFreelancerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_freelancer_dto_1 = require("./create-freelancer.dto");
class UpdateFreelancerDto extends (0, mapped_types_1.PartialType)(create_freelancer_dto_1.CreateFreelancerDto) {
}
exports.UpdateFreelancerDto = UpdateFreelancerDto;
//# sourceMappingURL=update-freelancer.dto.js.map