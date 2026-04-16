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
exports.HabilidadesService = void 0;
const common_1 = require("@nestjs/common");
const habilidades_repository_1 = require("../repository/habilidades.repository");
let HabilidadesService = class HabilidadesService {
    constructor(habilidadesRepository) {
        this.habilidadesRepository = habilidadesRepository;
    }
    findAll() {
        return this.habilidadesRepository.findAll();
    }
    findByFreelancer(freelancerId) {
        return this.habilidadesRepository.findByFreelancer(freelancerId);
    }
    async findOne(id) {
        const habilidad = await this.habilidadesRepository.findOne(id);
        if (!habilidad)
            throw new common_1.NotFoundException(`Habilidad con ID ${id} no encontrada`);
        return habilidad;
    }
    async create(dto) {
        return this.habilidadesRepository.create(dto);
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.habilidadesRepository.update(id, dto);
    }
    async remove(id) {
        await this.findOne(id);
        return this.habilidadesRepository.remove(id);
    }
};
exports.HabilidadesService = HabilidadesService;
exports.HabilidadesService = HabilidadesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [habilidades_repository_1.HabilidadesRepository])
], HabilidadesService);
//# sourceMappingURL=habilidades.service.js.map