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
exports.CategoriasService = void 0;
const common_1 = require("@nestjs/common");
const categorias_repository_1 = require("../repository/categorias.repository");
let CategoriasService = class CategoriasService {
    constructor(categoriasRepository) {
        this.categoriasRepository = categoriasRepository;
    }
    findAll() {
        return this.categoriasRepository.findAll();
    }
    async findOne(id) {
        const categoria = await this.categoriasRepository.findOne(id);
        if (!categoria)
            throw new common_1.NotFoundException(`Categoría con ID ${id} no encontrada`);
        return categoria;
    }
    async create(dto) {
        try {
            return await this.categoriasRepository.create(dto);
        }
        catch (error) {
            if (error.code === 'P2002')
                throw new common_1.ConflictException('Ya existe una categoría con ese nombre');
            throw error;
        }
    }
    async update(id, dto) {
        await this.findOne(id);
        try {
            return await this.categoriasRepository.update(id, dto);
        }
        catch (error) {
            if (error.code === 'P2002')
                throw new common_1.ConflictException('Ya existe una categoría con ese nombre');
            throw error;
        }
    }
    async remove(id) {
        await this.findOne(id);
        return this.categoriasRepository.remove(id);
    }
};
exports.CategoriasService = CategoriasService;
exports.CategoriasService = CategoriasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [categorias_repository_1.CategoriasRepository])
], CategoriasService);
//# sourceMappingURL=categorias.service.js.map