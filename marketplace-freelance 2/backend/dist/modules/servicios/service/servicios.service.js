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
exports.ServiciosService = void 0;
const common_1 = require("@nestjs/common");
const servicios_repository_1 = require("../repository/servicios.repository");
let ServiciosService = class ServiciosService {
    constructor(serviciosRepository) {
        this.serviciosRepository = serviciosRepository;
    }
    findAll() {
        return this.serviciosRepository.findAll();
    }
    findByCategoria(categoriaId) {
        return this.serviciosRepository.findByCategoria(categoriaId);
    }
    findByFreelancer(freelancerId) {
        return this.serviciosRepository.findByFreelancer(freelancerId);
    }
    async findOne(id) {
        const servicio = await this.serviciosRepository.findOne(id);
        if (!servicio)
            throw new common_1.NotFoundException(`Servicio con ID ${id} no encontrado`);
        return servicio;
    }
    async create(dto) {
        return this.serviciosRepository.create(dto);
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.serviciosRepository.update(id, dto);
    }
    async remove(id) {
        await this.findOne(id);
        return this.serviciosRepository.remove(id);
    }
};
exports.ServiciosService = ServiciosService;
exports.ServiciosService = ServiciosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [servicios_repository_1.ServiciosRepository])
], ServiciosService);
//# sourceMappingURL=servicios.service.js.map