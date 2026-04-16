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
exports.SolicitudesController = void 0;
const common_1 = require("@nestjs/common");
const solicitudes_service_1 = require("../service/solicitudes.service");
const create_solicitud_dto_1 = require("../dto/create-solicitud.dto");
const update_solicitud_dto_1 = require("../dto/update-solicitud.dto");
let SolicitudesController = class SolicitudesController {
    constructor(solicitudesService) {
        this.solicitudesService = solicitudesService;
    }
    findAll() {
        return this.solicitudesService.findAll();
    }
    findByCliente(clienteId) {
        return this.solicitudesService.findByCliente(clienteId);
    }
    findByServicio(servicioId) {
        return this.solicitudesService.findByServicio(servicioId);
    }
    findOne(id) {
        return this.solicitudesService.findOne(id);
    }
    create(dto) {
        return this.solicitudesService.create(dto);
    }
    update(id, dto) {
        return this.solicitudesService.update(id, dto);
    }
    remove(id) {
        return this.solicitudesService.remove(id);
    }
};
exports.SolicitudesController = SolicitudesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SolicitudesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('cliente/:clienteId'),
    __param(0, (0, common_1.Param)('clienteId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SolicitudesController.prototype, "findByCliente", null);
__decorate([
    (0, common_1.Get)('servicio/:servicioId'),
    __param(0, (0, common_1.Param)('servicioId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SolicitudesController.prototype, "findByServicio", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SolicitudesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_solicitud_dto_1.CreateSolicitudDto]),
    __metadata("design:returntype", void 0)
], SolicitudesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_solicitud_dto_1.UpdateSolicitudDto]),
    __metadata("design:returntype", void 0)
], SolicitudesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SolicitudesController.prototype, "remove", null);
exports.SolicitudesController = SolicitudesController = __decorate([
    (0, common_1.Controller)('solicitudes'),
    __metadata("design:paramtypes", [solicitudes_service_1.SolicitudesService])
], SolicitudesController);
//# sourceMappingURL=solicitudes.controller.js.map