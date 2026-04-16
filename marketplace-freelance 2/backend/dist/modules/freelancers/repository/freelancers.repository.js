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
exports.FreelancersRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let FreelancersRepository = class FreelancersRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.freelancer.findMany({
            include: { habilidades: true },
            orderBy: { id: 'asc' },
        });
    }
    findOne(id) {
        return this.prisma.freelancer.findUnique({
            where: { id },
            include: {
                habilidades: true,
                servicios: { include: { categoriaServicio: true } },
            },
        });
    }
    create(dto) {
        return this.prisma.freelancer.create({
            data: dto,
            include: { habilidades: true },
        });
    }
    update(id, dto) {
        return this.prisma.freelancer.update({
            where: { id },
            data: dto,
            include: { habilidades: true },
        });
    }
    remove(id) {
        return this.prisma.freelancer.delete({ where: { id } });
    }
};
exports.FreelancersRepository = FreelancersRepository;
exports.FreelancersRepository = FreelancersRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FreelancersRepository);
//# sourceMappingURL=freelancers.repository.js.map