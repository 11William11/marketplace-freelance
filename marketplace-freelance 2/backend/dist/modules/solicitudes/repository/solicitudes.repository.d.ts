import { PrismaService } from '../../../prisma/prisma.service';
import { CreateSolicitudDto } from '../dto/create-solicitud.dto';
import { UpdateSolicitudDto } from '../dto/update-solicitud.dto';
export declare class SolicitudesRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
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
        proyecto: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            estado: import(".prisma/client").$Enums.EstadoProyecto;
            fechaInicio: Date | null;
            fechaFin: Date | null;
            solicitudId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        clienteId: number;
        servicioId: number;
        mensaje: string;
        estado: import(".prisma/client").$Enums.EstadoSolicitud;
    })[]>;
    findByCliente(clienteId: number): import(".prisma/client").Prisma.PrismaPromise<({
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
        proyecto: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            estado: import(".prisma/client").$Enums.EstadoProyecto;
            fechaInicio: Date | null;
            fechaFin: Date | null;
            solicitudId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        clienteId: number;
        servicioId: number;
        mensaje: string;
        estado: import(".prisma/client").$Enums.EstadoSolicitud;
    })[]>;
    findByServicio(servicioId: number): import(".prisma/client").Prisma.PrismaPromise<({
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
        proyecto: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            estado: import(".prisma/client").$Enums.EstadoProyecto;
            fechaInicio: Date | null;
            fechaFin: Date | null;
            solicitudId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        clienteId: number;
        servicioId: number;
        mensaje: string;
        estado: import(".prisma/client").$Enums.EstadoSolicitud;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__SolicitudClient<{
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
        proyecto: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            estado: import(".prisma/client").$Enums.EstadoProyecto;
            fechaInicio: Date | null;
            fechaFin: Date | null;
            solicitudId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        clienteId: number;
        servicioId: number;
        mensaje: string;
        estado: import(".prisma/client").$Enums.EstadoSolicitud;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    create(dto: CreateSolicitudDto): import(".prisma/client").Prisma.Prisma__SolicitudClient<{
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
        proyecto: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            estado: import(".prisma/client").$Enums.EstadoProyecto;
            fechaInicio: Date | null;
            fechaFin: Date | null;
            solicitudId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        clienteId: number;
        servicioId: number;
        mensaje: string;
        estado: import(".prisma/client").$Enums.EstadoSolicitud;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, dto: UpdateSolicitudDto): import(".prisma/client").Prisma.Prisma__SolicitudClient<{
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
        proyecto: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            estado: import(".prisma/client").$Enums.EstadoProyecto;
            fechaInicio: Date | null;
            fechaFin: Date | null;
            solicitudId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        clienteId: number;
        servicioId: number;
        mensaje: string;
        estado: import(".prisma/client").$Enums.EstadoSolicitud;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__SolicitudClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        clienteId: number;
        servicioId: number;
        mensaje: string;
        estado: import(".prisma/client").$Enums.EstadoSolicitud;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
