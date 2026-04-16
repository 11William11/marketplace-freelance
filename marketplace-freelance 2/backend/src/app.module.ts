/**
 * ============================================================
 * MÓDULO RAÍZ — Marketplace de Servicios Freelance
 * ============================================================
 *
 * ARQUITECTURA MODULAR:
 *   AppModule
 *   ├── PrismaModule          → Conexión a la base de datos (Global)
 *   ├── CategoriasModule      → CRUD de categorías de servicio  [Sprint 1]
 *   ├── FreelancersModule     → CRUD de freelancers             [Sprint 1]
 *   ├── HabilidadesModule     → CRUD de habilidades             [Sprint 1]
 *   ├── ClientesModule        → CRUD de clientes                [Sprint 1]
 *   ├── ServiciosModule       → CRUD de servicios               [Sprint 2]
 *   ├── SolicitudesModule     → Gestión de solicitudes          [Sprint 2-3]
 *   └── ProyectosModule       → Gestión de proyectos y estados  [Sprint 3]
 */
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { FreelancersModule } from './modules/freelancers/freelancers.module';
import { HabilidadesModule } from './modules/habilidades/habilidades.module';
import { ClientesModule } from './modules/clientes/clientes.module';
import { ServiciosModule } from './modules/servicios/servicios.module';
import { SolicitudesModule } from './modules/solicitudes/solicitudes.module';
import { ProyectosModule } from './modules/proyectos/proyectos.module';

@Module({
  imports: [
    PrismaModule,
    CategoriasModule,
    FreelancersModule,
    HabilidadesModule,
    ClientesModule,
    ServiciosModule,
    SolicitudesModule,
    ProyectosModule,
  ],
})
export class AppModule {}
