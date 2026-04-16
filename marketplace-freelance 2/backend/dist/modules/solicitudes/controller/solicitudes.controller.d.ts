import { SolicitudesService } from '../service/solicitudes.service';
import { CreateSolicitudDto } from '../dto/create-solicitud.dto';
import { UpdateSolicitudDto } from '../dto/update-solicitud.dto';
export declare class SolicitudesController {
    private readonly solicitudesService;
    constructor(solicitudesService: SolicitudesService);
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
    findOne(id: number): Promise<{
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
    }>;
    create(dto: CreateSolicitudDto): Promise<{
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
    }>;
    update(id: number, dto: UpdateSolicitudDto): Promise<{
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
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        clienteId: number;
        servicioId: number;
        mensaje: string;
        estado: import(".prisma/client").$Enums.EstadoSolicitud;
    }>;
}
