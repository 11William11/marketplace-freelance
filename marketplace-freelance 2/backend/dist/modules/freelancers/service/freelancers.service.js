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
exports.FreelancersService = void 0;
const common_1 = require("@nestjs/common");
const freelancers_repository_1 = require("../repository/freelancers.repository");
let FreelancersService = class FreelancersService {
    constructor(freelancersRepository) {
        this.freelancersRepository = freelancersRepository;
    }
    findAll() {
        return this.freelancersRepository.findAll();
    }
    async findOne(id) {
        const freelancer = await this.freelancersRepository.findOne(id);
        if (!freelancer)
            throw new common_1.NotFoundException(`Freelancer con ID ${id} no encontrado`);
        return freelancer;
    }
    async create(dto) {
        try {
            return await this.freelancersRepository.create(dto);
        }
        catch (error) {
            if (error.code === 'P2002')
                throw new common_1.ConflictException('Ya existe un freelancer con ese documento o correo');
            throw error;
        }
    }
    async update(id, dto) {
        await this.findOne(id);
        try {
            return await this.freelancersRepository.update(id, dto);
        }
        catch (error) {
            if (error.code === 'P2002')
                throw new common_1.ConflictException('Ya existe un freelancer con ese documento o correo');
            throw error;
        }
    }
    async remove(id) {
        await this.findOne(id);
        return this.freelancersRepository.remove(id);
    }
};
exports.FreelancersService = FreelancersService;
exports.FreelancersService = FreelancersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [freelancers_repository_1.FreelancersRepository])
], FreelancersService);
//# sourceMappingURL=freelancers.service.js.map