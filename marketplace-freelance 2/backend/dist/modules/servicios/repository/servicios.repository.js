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
exports.ServiciosRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const INCLUDE = {
    freelancer: true,
    categoriaServicio: true,
};
let ServiciosRepository = class ServiciosRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.servicio.findMany({
            include: INCLUDE,
            orderBy: { id: 'asc' },
        });
    }
    findByCategoria(categoriaId) {
        return this.prisma.servicio.findMany({
            where: { categoriaServicioId: categoriaId, activo: true },
            include: INCLUDE,
            orderBy: { id: 'asc' },
        });
    }
    findByFreelancer(freelancerId) {
        return this.prisma.servicio.findMany({
            where: { freelancerId },
            include: INCLUDE,
            orderBy: { id: 'asc' },
        });
    }
    findOne(id) {
        return this.prisma.servicio.findUnique({ where: { id }, include: INCLUDE });
    }
    create(dto) {
        return this.prisma.servicio.create({ data: dto, include: INCLUDE });
    }
    update(id, dto) {
        return this.prisma.servicio.update({ where: { id }, data: dto, include: INCLUDE });
    }
    remove(id) {
        return this.prisma.servicio.delete({ where: { id } });
    }
};
exports.ServiciosRepository = ServiciosRepository;
exports.ServiciosRepository = ServiciosRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ServiciosRepository);
//# sourceMappingURL=servicios.repository.js.map