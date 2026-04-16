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
exports.HabilidadesController = void 0;
const common_1 = require("@nestjs/common");
const habilidades_service_1 = require("../service/habilidades.service");
const create_habilidad_dto_1 = require("../dto/create-habilidad.dto");
const update_habilidad_dto_1 = require("../dto/update-habilidad.dto");
let HabilidadesController = class HabilidadesController {
    constructor(habilidadesService) {
        this.habilidadesService = habilidadesService;
    }
    findAll() { return this.habilidadesService.findAll(); }
    findByFreelancer(freelancerId) {
        return this.habilidadesService.findByFreelancer(freelancerId);
    }
    findOne(id) { return this.habilidadesService.findOne(id); }
    create(dto) { return this.habilidadesService.create(dto); }
    update(id, dto) {
        return this.habilidadesService.update(id, dto);
    }
    remove(id) { return this.habilidadesService.remove(id); }
};
exports.HabilidadesController = HabilidadesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HabilidadesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('freelancer/:freelancerId'),
    __param(0, (0, common_1.Param)('freelancerId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HabilidadesController.prototype, "findByFreelancer", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HabilidadesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_habilidad_dto_1.CreateHabilidadDto]),
    __metadata("design:returntype", void 0)
], HabilidadesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_habilidad_dto_1.UpdateHabilidadDto]),
    __metadata("design:returntype", void 0)
], HabilidadesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HabilidadesController.prototype, "remove", null);
exports.HabilidadesController = HabilidadesController = __decorate([
    (0, common_1.Controller)('habilidades'),
    __metadata("design:paramtypes", [habilidades_service_1.HabilidadesService])
], HabilidadesController);
//# sourceMappingURL=habilidades.controller.js.map