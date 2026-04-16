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
exports.ProyectosRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const INCLUDE = {
    solicitud: {
        include: {
            cliente: true,
            servicio: { include: { freelancer: true, categoriaServicio: true } },
        },
    },
};
let ProyectosRepository = class ProyectosRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.proyecto.findMany({ include: INCLUDE, orderBy: { id: 'asc' } });
    }
    findOne(id) {
        return this.prisma.proyecto.findUnique({ where: { id }, include: INCLUDE });
    }
    update(id, dto) {
        const data = { estado: dto.estado };
        if (dto.fechaInicio)
            data.fechaInicio = new Date(dto.fechaInicio);
        if (dto.fechaFin)
            data.fechaFin = new Date(dto.fechaFin);
        return this.prisma.proyecto.update({ where: { id }, data, include: INCLUDE });
    }
};
exports.ProyectosRepository = ProyectosRepository;
exports.ProyectosRepository = ProyectosRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProyectosRepository);
//# sourceMappingURL=proyectos.repository.js.map