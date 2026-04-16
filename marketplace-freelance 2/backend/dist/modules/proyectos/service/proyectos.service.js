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
exports.ProyectosService = void 0;
const common_1 = require("@nestjs/common");
const proyectos_repository_1 = require("../repository/proyectos.repository");
const update_proyecto_dto_1 = require("../dto/update-proyecto.dto");
let ProyectosService = class ProyectosService {
    constructor(proyectosRepository) {
        this.proyectosRepository = proyectosRepository;
    }
    findAll() {
        return this.proyectosRepository.findAll();
    }
    async findOne(id) {
        const proyecto = await this.proyectosRepository.findOne(id);
        if (!proyecto)
            throw new common_1.NotFoundException(`Proyecto con ID ${id} no encontrado`);
        return proyecto;
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.estado === update_proyecto_dto_1.EstadoProyectoDto.EN_PROGRESO && !dto.fechaInicio) {
            dto.fechaInicio = new Date().toISOString();
        }
        if ((dto.estado === update_proyecto_dto_1.EstadoProyectoDto.COMPLETADO ||
            dto.estado === update_proyecto_dto_1.EstadoProyectoDto.CANCELADO) &&
            !dto.fechaFin) {
            dto.fechaFin = new Date().toISOString();
        }
        return this.proyectosRepository.update(id, dto);
    }
};
exports.ProyectosService = ProyectosService;
exports.ProyectosService = ProyectosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [proyectos_repository_1.ProyectosRepository])
], ProyectosService);
//# sourceMappingURL=proyectos.service.js.map