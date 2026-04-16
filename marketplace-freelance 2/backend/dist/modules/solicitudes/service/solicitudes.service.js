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
exports.SolicitudesService = void 0;
const common_1 = require("@nestjs/common");
const solicitudes_repository_1 = require("../repository/solicitudes.repository");
const prisma_service_1 = require("../../../prisma/prisma.service");
let SolicitudesService = class SolicitudesService {
    constructor(solicitudesRepository, prisma) {
        this.solicitudesRepository = solicitudesRepository;
        this.prisma = prisma;
    }
    findAll() {
        return this.solicitudesRepository.findAll();
    }
    findByCliente(clienteId) {
        return this.solicitudesRepository.findByCliente(clienteId);
    }
    findByServicio(servicioId) {
        return this.solicitudesRepository.findByServicio(servicioId);
    }
    async findOne(id) {
        const solicitud = await this.solicitudesRepository.findOne(id);
        if (!solicitud)
            throw new common_1.NotFoundException(`Solicitud con ID ${id} no encontrada`);
        return solicitud;
    }
    async create(dto) {
        return this.solicitudesRepository.create(dto);
    }
    async update(id, dto) {
        const solicitud = await this.findOne(id);
        if (solicitud.estado !== 'PENDIENTE') {
            throw new common_1.BadRequestException(`La solicitud ya fue ${solicitud.estado.toLowerCase()}. No se puede modificar.`);
        }
        const actualizada = await this.solicitudesRepository.update(id, dto);
        if (dto.estado === 'ACEPTADA') {
            await this.prisma.proyecto.create({
                data: {
                    solicitudId: id,
                    estado: 'PENDIENTE',
                },
            });
        }
        return actualizada;
    }
    async remove(id) {
        await this.findOne(id);
        return this.solicitudesRepository.remove(id);
    }
};
exports.SolicitudesService = SolicitudesService;
exports.SolicitudesService = SolicitudesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [solicitudes_repository_1.SolicitudesRepository,
        prisma_service_1.PrismaService])
], SolicitudesService);
//# sourceMappingURL=solicitudes.service.js.map