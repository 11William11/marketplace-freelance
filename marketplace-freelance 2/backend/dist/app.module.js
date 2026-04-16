"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("./prisma/prisma.module");
const categorias_module_1 = require("./modules/categorias/categorias.module");
const freelancers_module_1 = require("./modules/freelancers/freelancers.module");
const habilidades_module_1 = require("./modules/habilidades/habilidades.module");
const clientes_module_1 = require("./modules/clientes/clientes.module");
const servicios_module_1 = require("./modules/servicios/servicios.module");
const solicitudes_module_1 = require("./modules/solicitudes/solicitudes.module");
const proyectos_module_1 = require("./modules/proyectos/proyectos.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            categorias_module_1.CategoriasModule,
            freelancers_module_1.FreelancersModule,
            habilidades_module_1.HabilidadesModule,
            clientes_module_1.ClientesModule,
            servicios_module_1.ServiciosModule,
            solicitudes_module_1.SolicitudesModule,
            proyectos_module_1.ProyectosModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map