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
exports.HabilidadesRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let HabilidadesRepository = class HabilidadesRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.habilidad.findMany({
            include: { freelancer: true },
            orderBy: { id: 'asc' },
        });
    }
    findByFreelancer(freelancerId) {
        return this.prisma.habilidad.findMany({ where: { freelancerId } });
    }
    findOne(id) {
        return this.prisma.habilidad.findUnique({
            where: { id },
            include: { freelancer: true },
        });
    }
    create(dto) {
        return this.prisma.habilidad.create({
            data: dto,
            include: { freelancer: true },
        });
    }
    update(id, dto) {
        return this.prisma.habilidad.update({
            where: { id },
            data: dto,
            include: { freelancer: true },
        });
    }
    remove(id) {
        return this.prisma.habilidad.delete({ where: { id } });
    }
};
exports.HabilidadesRepository = HabilidadesRepository;
exports.HabilidadesRepository = HabilidadesRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HabilidadesRepository);
//# sourceMappingURL=habilidades.repository.js.map