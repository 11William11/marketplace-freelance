import { PrismaService } from '../../../prisma/prisma.service';
import { UpdateProyectoDto } from '../dto/update-proyecto.dto';
export declare class ProyectosRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        solicitud: {
            cliente: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombres: string;
                apellidos: string;
                documentoIdentidad: string;
                correoElectronico: string;
                telefono: string | null;
                empresa: string | null;
            };
            servicio: {
                categoriaServicio: {
                    nombre: string;
                    descripcion: string | null;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                };
                freelancer: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    nombres: string;
                    apellidos: string;
                    documentoIdentidad: string;
                    correoElectronico: string;
                    telefono: string | null;
                    descripcionPerfil: string;
                    portfolioUrl: string | null;
                };
            } & {
                descripcion: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                freelancerId: number;
                titulo: string;
                precio: number;
                tiempoEntregaDias: number;
                activo: boolean;
                categoriaServicioId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            clienteId: number;
            servicioId: number;
            mensaje: string;
            estado: import(".prisma/client").$Enums.EstadoSolicitud;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        estado: import(".prisma/client").$Enums.EstadoProyecto;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        solicitudId: number;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProyectoClient<{
        solicitud: {
            cliente: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombres: string;
                apellidos: string;
                documentoIdentidad: string;
                correoElectronico: string;
                telefono: string | null;
                empresa: string | null;
            };
            servicio: {
                categoriaServicio: {
                    nombre: string;
                    descripcion: string | null;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                };
                freelancer: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    nombres: string;
                    apellidos: string;
                    documentoIdentidad: string;
                    correoElectronico: string;
                    telefono: string | null;
                    descripcionPerfil: string;
                    portfolioUrl: string | null;
                };
            } & {
                descripcion: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                freelancerId: number;
                titulo: string;
                precio: number;
                tiempoEntregaDias: number;
                activo: boolean;
                categoriaServicioId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            clienteId: number;
            servicioId: number;
            mensaje: string;
            estado: import(".prisma/client").$Enums.EstadoSolicitud;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        estado: import(".prisma/client").$Enums.EstadoProyecto;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        solicitudId: number;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, dto: UpdateProyectoDto): import(".prisma/client").Prisma.Prisma__ProyectoClient<{
        solicitud: {
            cliente: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                nombres: string;
                apellidos: string;
                documentoIdentidad: string;
                correoElectronico: string;
                telefono: string | null;
                empresa: string | null;
            };
            servicio: {
                categoriaServicio: {
                    nombre: string;
                    descripcion: string | null;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                };
                freelancer: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    nombres: string;
                    apellidos: string;
                    documentoIdentidad: string;
                    correoElectronico: string;
                    telefono: string | null;
                    descripcionPerfil: string;
                    portfolioUrl: string | null;
                };
            } & {
                descripcion: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                freelancerId: number;
                titulo: string;
                precio: number;
                tiempoEntregaDias: number;
                activo: boolean;
                categoriaServicioId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            clienteId: number;
            servicioId: number;
            mensaje: string;
            estado: import(".prisma/client").$Enums.EstadoSolicitud;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        estado: import(".prisma/client").$Enums.EstadoProyecto;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        solicitudId: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
